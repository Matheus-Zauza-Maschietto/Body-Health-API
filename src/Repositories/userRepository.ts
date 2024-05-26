import { AppDataSource } from "../data-source";
import { User } from "../Models/user";
import { Repository } from "typeorm";

export class UserRepository{
    private readonly userDataSource: Repository<User>

    constructor(){
        this.userDataSource = AppDataSource.getRepository(User);
    }

    public async createUser(newUser: User): Promise<User> {
        return await this.userDataSource.save(newUser)
    }

    public async getUserByEmailAndPassword(user: User): Promise<User | null>{
        return await this.userDataSource.findOneBy({
            email: user.email,
            senha: user.senha
        })
    }

    public async getUserByEmail(user: User): Promise<User | null>{
        return await this.userDataSource.findOneBy({
            email: user.email,
        })
    }

    public async getUserById(id: number): Promise<User | null>{
        return await this.userDataSource.findOneBy({
            id: id,
        })
    }

    public async getUserByToken(user: User): Promise<User | null>{
        const usuarioByToken = this.userDataSource.findOneBy({
            token: user.token,
        })
        return usuarioByToken
    }

    public async loginUser(user: User): Promise<User>{
        return await this.userDataSource.save(user);
    }

    public async getUsers(): Promise<User[]>{
        return await this.userDataSource.find();
    }
}

export default new UserRepository()