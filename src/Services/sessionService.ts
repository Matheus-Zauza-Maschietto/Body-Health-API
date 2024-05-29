import { User } from "../Models/user";
import userRepository, { UserRepository } from "../Repositories/userRepository"
import { Session } from "../Models/session";
import sessionRepository, { SessionRepository } from "../Repositories/sessionRepository";

export class SessionService {
    private readonly sessionRepository: SessionRepository;
    private readonly userRepository: UserRepository;
    constructor() {
        this.sessionRepository = sessionRepository;
        this.userRepository = userRepository;
    }

    public async createSession(body: any, people: User, personalTrainerId: number): Promise<Session> {
        const newSession = new Session()
        
        newSession.pessoaId = people
        newSession.duracao = body.duracao
        newSession.dataHora = body.dataHora
        newSession.localizacao = body.localizacao
        const personalTrainer = await this.userRepository.getUserById(body.personalTrainerId)

        if(personalTrainer == null){
            throw new Error("Personal Trainer não encontrado.")
        }

        newSession.personalTrainerId = personalTrainer

        return await this.sessionRepository.createSession(newSession)
    }

    public async getAllSessionsByPeople(people: User): Promise<Session[]>{
        return this.sessionRepository.getSessionsByPeople(people)
    }
}
