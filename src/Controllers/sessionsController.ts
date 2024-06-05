import {Request, Response} from 'express'
import { SessionService } from '../Services/sessionService';
import { PeopleService } from '../Services/pessoaService';

class SessionController{

    private readonly sessionService: SessionService;
    private readonly peopleService: PeopleService;
    constructor(){
        this.sessionService = new SessionService();
        this.peopleService = new PeopleService();

        this.createSession = this.createSession.bind(this);
        this.getSessionsByUser = this.getSessionsByUser.bind(this);
    }

    public async createSession(req: Request, res: Response): Promise<Response>{
        try{
            const people = await this.peopleService.validateToken(req.headers.authorization)
            const session = await this.sessionService.createSession(req.body, people, Number.parseInt(req.body.personalTrainerId))
            res.json(session).status(201)
        }
        catch(error: any){
            res.json({"error": error.message, "StackTrace": error.stack}).status(500)
        }

        return res;
    }

    public async getSessionsByUser(req: Request, res: Response): Promise<Response>{
        try{
            const people = await this.peopleService.validateToken(req.headers.authorization)
            const session = await this.sessionService.getAllSessionsByPeople(people)
            res.json(session).status(201)
        }
        catch(error: any){
            res.json({"error": error.message}).status(500)
        }

        return res;
    }

}

export default new SessionController()