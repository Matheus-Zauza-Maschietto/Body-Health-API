import { LoginDto } from "../DTOs/loginDto";
import { User } from "../Models/user";
import userRepository, { UserRepository } from "../Repositories/userRepository"
import peopleRepository, { PeopleRepository } from "../Repositories/peopleRepository";
import { v4 as uuidv4 } from 'uuid';
import {UserResDTO} from "../DTOs/user.dto";
import {UserConverter} from "../Converter/user.converter";

export class PeopleService {
    private readonly userRepository: UserRepository;
    private readonly peopleRepository: PeopleRepository;
    constructor() {
        this.userRepository = userRepository
        this.peopleRepository = peopleRepository
    }

    public async findAllPeoples(): Promise<UserResDTO[]>{
        return (await userRepository.getUsers())
            .map(u => UserConverter.entityToRes(u));
    }

    public async findPeopleById(id: number): Promise<UserResDTO>{
        return UserConverter.entityToRes((await userRepository.getUserById(id)));
    }

    public async createPeople(body: any): Promise<User> {
        const newUser = new User()
        newUser.nome = body.nome
        newUser.email = body.email
        newUser.senha = body.senha
        newUser.xp = 0
        newUser.ehPersonal = false;
        //newUser.peso = body.pesos
        //newUser.dataNascimento = body.dataNascimento

        const existPeople = await this.peopleRepository.getPeopleByEmail(newUser)
        if (existPeople != null) {
            throw new Error("Email ja cadastrado.")
        }
        return await this.peopleRepository.createPeople(newUser)
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
