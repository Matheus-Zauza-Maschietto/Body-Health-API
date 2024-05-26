import { LoginDto } from "../DTOs/loginDto";
import { User } from "../Models/user";
import userRepository, { UserRepository } from "../Repositories/userRepository"
import { v4 as uuidv4 } from 'uuid';
import {UserResDTO} from "../DTOs/user.dto";
import {UserConverter} from "../Converter/user.converter";

export class UserService {
    private readonly userRepository: UserRepository;
    constructor() {
        this.userRepository = userRepository
    }

    public async findAllUsers(): Promise<UserResDTO[]>{
        return (await userRepository.getUsers())
            .map(u => UserConverter.entityToRes(u));
    }

    public async findUserById(id: number): Promise<UserResDTO>{
        return UserConverter.entityToRes((await userRepository.getUserById(id)));
    }

    public async createUser(body: any): Promise<User> {
        const newUser = new User()
        newUser.nome = body.nome
        newUser.email = body.email
        newUser.senha = body.senha
        newUser.peso = body.peso

        const existUser = await this.userRepository.getUserByEmail(newUser)
        if (existUser != null) {
            throw new Error("Email ja cadastrado.")
        }

        return await this.userRepository.createUser(newUser)
    }

    public async loginUser(body: any): Promise<LoginDto> {
        const user = new User()
        user.email = body.email
        user.senha = body.senha

        const getUser = await this.userRepository.getUserByEmailAndPassword(user)

        if (getUser == null) {
            throw new Error("Email ou senha incorretos.")
        }

        this.SetUserLogin(getUser)
        const userLogin = await this.userRepository.loginUser(getUser)
        return new LoginDto(userLogin, "Login efetuado com sucesso.")
    }

    public async validateToken(authorization: any): Promise<User> {
        const user = new User()
        user.token = authorization

        const getUser = await this.userRepository.getUserByToken(user)
        if (getUser == null) {
            throw new Error("token não encontrado.")
        }

        const date = new Date()
        if (getUser.tokenExpiracao < date) {
            throw new Error("token expirado.")
        }

        return getUser
    }

    private SetUserLogin(user: User) {
        {
            user.token = uuidv4()
            user.tokenExpiracao = new Date();
            user.tokenExpiracao.setHours(user.tokenExpiracao.getHours() + 1);
        }
    }
}
