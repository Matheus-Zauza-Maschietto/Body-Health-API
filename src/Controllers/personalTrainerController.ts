import {Request, Response} from 'express'
import { UserService } from '../Services/userService';
import { PersonalTrainerService } from '../Services/personalTrainerServices';

export class PersonalTrainerController{

    private readonly personalTrainerService: PersonalTrainerService;
    private readonly userService: UserService;
    constructor(){
        this.personalTrainerService = new PersonalTrainerService();
        this.userService = new UserService();

        this.getPersonalTrainers = this.getPersonalTrainers.bind(this);
        this.createPersonalTrainer = this.createPersonalTrainer.bind(this);
        this.getPersonalTrainerById = this.getPersonalTrainerById.bind(this);
    }

    public async createPersonalTrainer(req: Request, res: Response): Promise<Response>{
        try{
            let user = await this.personalTrainerService.createPersonalTrainer(req.body)
            res.json(user).status(201)
        }
        catch(error: any){
            res.json({"error": error.message, "StackTrace": error.stack}).status(500)
        }

        return res;
    }

    public async getPersonalTrainerById(req: Request, res: Response): Promise<Response>{
        try {
            await this.userService.validateToken(req.headers.authorization)
            res.json(await this.personalTrainerService.findPersonalTrainerById(Number.parseInt(req.params.id)));
        }catch(error: any){
            res.json({error: error.message, "StackTrace": error.stack}).status(500)
        }
        return res;
    }

    public async getPersonalTrainers(req: Request, res: Response): Promise<Response>{
        try {
            await this.userService.validateToken(req.headers.authorization)
            res.json(await this.personalTrainerService.findAllPersonalTrainers());
        }catch(error: any){
            res.json({error: error.message, "StackTrace": error.stack}).status(500)
        }
        return res;
    }
}

export default new PersonalTrainerController()