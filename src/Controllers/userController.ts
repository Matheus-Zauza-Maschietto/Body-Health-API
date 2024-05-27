import {Request, Response} from 'express'
import { UserService } from '../Services/userService';
import userRepository from '../Repositories/userRepository';

class UserController{

    private readonly userService: UserService;
    constructor(){
        this.userService = new UserService();
    }

    public async createUser(req: Request, res: Response): Promise<Response>{
        try{
            let user = await this.userService.createUser(req.body)
            res.json(user).status(201)
        }
        catch(error: any){
            res.json({"error": error.message}).status(500)
        }

        return res;
    }

    public async getUsers(req: Request, res: Response): Promise<Response>{
        return res.json(await this.userService.findAllUsers());
    }

    public async getUserById(req: Request, res: Response): Promise<Response>{
        try {
            await this.userService.validateToken(req.headers.authorization)
            res.json(await this.userService.findUserById(Number.parseInt(req.params.id)));
        }catch(error: any){
            res.json({error: error.message}).status(500)
        }
        return res;
    }

    public async loginUser(req: Request, res: Response): Promise<Response>{
        const userService = new UserService();
        let loginDto = null

        try{
            loginDto = await userService.loginUser(req.body)
            res.json(loginDto).status(201)
        }
        catch(error: any){
            res.json({"error": error.message}).status(500)
        }

        return res;
    }
}

export default new UserController()