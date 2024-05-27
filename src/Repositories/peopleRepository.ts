import { AppDataSource } from "../data-source";
import { User } from "../Models/user";
import { Repository } from "typeorm";

export class PeopleRepository{
    private readonly userDataSource: Repository<User>

    constructor(){
        this.userDataSource = AppDataSource.getRepository(User);
    }

    public async createPeople(newPeople: User): Promise<User> {
        return await this.userDataSource.save(newPeople)
    }

    public async getUserByEmailAndPassword(people: User): Promise<User | null>{
        return await this.userDataSource.findOneBy({
            email: people.email,
            senha: people.senha
        })
    }

    public async getPeopleByEmail(people: User): Promise<User | null>{
        return await this.userDataSource.findOneBy({
            email: people.email,
            ehPersonal: false
        })
    }

    public async getPeopleById(id: number): Promise<User | null>{
        return await this.userDataSource.findOneBy({
            id: id,
        })
    }
}

export default new PeopleRepository()