import { Request, Response } from "express";
import { TarefaService } from "../Services/tarerefaService";
import { UserService } from "../Services/userService";


class TarefaController{
    public async getTarefas(req: Request, res: Response){
        const tarefaService = new TarefaService();
        const userService = new UserService();
        try{
            const user = await userService.validateToken(req.headers.authorization)
            let tarefas = await tarefaService.getTarefasByUser(user)
            res.json(tarefas).status(200)
        }
        catch(error: any){
            res.json({error: error.message}).status(500)
        }
        return res;
    }

    public async getTarefaById(req: Request, res: Response){
        const tarefaService = new TarefaService();
        const userService = new UserService();
        try{
            const user = await userService.validateToken(req.headers.authorization)
            let tarefa = await tarefaService.getTarefasByUserAndId(user, req.params.id)
            res.json(tarefa).status(200)
        }
        catch(error: any){
            res.json({error: error.message}).status(500)
        }
        return res;
    }

    public async createTerafa(req: Request, res: Response){
        const tarefaService = new TarefaService();
        const userService = new UserService();
        try{
            const user = await userService.validateToken(req.headers.authorization)
            let tarefa = await tarefaService.createTarefa(req.body, user)
            res.json(tarefa).status(200)
        }
        catch(error: any){
            res.json({error: error.message}).status(500)
        }
        return res;
    }

    public async updateTarefaById(req: Request, res: Response){
        const tarefaService = new TarefaService();
        const userService = new UserService();
        try{
            const user = await userService.validateToken(req.headers.authorization)
            let tarefa = await tarefaService.updateTarefa(req.body, user, req.params.id)
            res.json(tarefa).status(200)
        }
        catch(error: any){
            res.json({error: error.message}).status(500)
        }
        return res;
    }

    public async deleteTarefaById(req: Request, res: Response){
        const tarefaService = new TarefaService();
        const userService = new UserService();
        try{
            const user = await userService.validateToken(req.headers.authorization)
            let tarefa = await tarefaService.deleteTarefaByUserAndId(user, req.params.id)
            res.json(tarefa).status(200)
        }
        catch(error: any){
            res.json({error: error.message}).status(500)
        }
        return res;
    }
}

export default new TarefaController()