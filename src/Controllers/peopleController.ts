import {Request, Response} from 'express'
import { UserService } from '../Services/userService';
import { PeopleService } from '../Services/pessoaService';

class PeopleController{

    private readonly peopleService: PeopleService;
    constructor(){
        this.peopleService = new PeopleService();
    }

    public async createPeople(req: Request, res: Response): Promise<Response>{
        try{
            let people = await this.peopleService.createPeople(req.body)
            res.json(people).status(201)
        }
        catch(error: any){
            res.json({"error": error.message}).status(500)
        }

        return res;
    }

    public async getPeopleById(req: Request, res: Response): Promise<Response>{
        try {
            await this.peopleService.validateToken(req.headers.authorization)
            res.json(await this.peopleService.findPeopleById(Number.parseInt(req.params.id)));
        }catch(error: any){
            res.json({error: error.message}).status(500)
        }
        return res;
    }

}

export default new PeopleController()