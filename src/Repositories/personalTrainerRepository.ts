import { AppDataSource } from "../data-source";
import { User } from "../Models/user";
import { Repository } from "typeorm";

export class PersonalTrainerRepository{
    private readonly userDataSource: Repository<User>

    constructor(){
        this.userDataSource = AppDataSource.getRepository(User);
    }

    public async createPersonalTrainer(newPersonalTrainer: User): Promise<User> {
        return await this.userDataSource.save(newPersonalTrainer)
    }

    public async getUserByEmailAndPassword(people: User): Promise<User | null>{
        return await this.userDataSource.findOneBy({
            email: people.email,
            senha: people.senha
        })
    }

    public async getPersonalTrainerByEmail(people: User): Promise<User | null>{
        return await this.userDataSource.findOneBy({
            email: people.email,
            ehPersonal: true
        })
    }

    public async getPersonalTrainers(): Promise<User[]>{
        return await this.userDataSource.findBy({
            ehPersonal: true
        })
    }
}

export default new PersonalTrainerRepository()