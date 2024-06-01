
import { Session } from "../Models/session";
import { AppDataSource } from "../data-source";
import { User } from "../Models/user";
import { Repository } from "typeorm";

export class SessionRepository{
    private readonly sessionDataSource: Repository<Session>

    constructor(){
        this.sessionDataSource = AppDataSource.getRepository(Session);
    }

    public async createSession(newSessino: Session): Promise<Session> {
        return await this.sessionDataSource.save(newSessino)
    }

    public async getSessionsByPeople(people: User): Promise<Session[]>{
        return await this.sessionDataSource.findBy({
            pessoa: people
        })
    }

    public async getSessionsByPersonalTrainer(personalTrainer: Session): Promise<Session[]>{
        return await this.sessionDataSource.findBy({
            pessoa: personalTrainer
        })
    }

}

export default new SessionRepository()