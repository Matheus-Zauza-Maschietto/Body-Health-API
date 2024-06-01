import {Request, Response} from 'express'
import { UserService } from '../Services/userService';
import { SessionService } from '../Services/sessionService';
import { PersonalTrainerService } from '../Services/personalTrainerServices';
import { PeopleService } from '../Services/pessoaService';

class PeopleController{

    private readonly sessionService: SessionService;
    private readonly peopleService: PeopleService;
    private readonly personalTrainerService: PersonalTrainerService;
    constructor(){
        this.sessionService = new SessionService();
        this.personalTrainerService = new PersonalTrainerService();
        this.peopleService = new PeopleService();
    }

    public async createSession(req: Request, res: Response): Promise<Response>{
        try{
            const people = await this.peopleService.validateToken(req.headers.authorization)
            const session = await this.sessionService.createSession(req.body, people, Number.parseInt(req.body.personalTrainerId))
            res.json(session).status(201)
        }
        catch(error: any){
            res.json({"error": error.message}).status(500)
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

export default new PeopleController()