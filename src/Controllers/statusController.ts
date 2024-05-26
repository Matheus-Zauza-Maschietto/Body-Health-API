import { Request, Response } from "express";
import { StatusService } from "../Services/statusService";

class StatusController{

    public async getStatus(req: Request, res: Response): Promise<Response>{
        const statusService = new StatusService();
        try{
            const status = await statusService.getStatus()
            res.json(status).status(200)
        }
        catch(error: any){
            res.json({error: error.message}).status(500)
        }
        return res;
    }

    public async getStatusById(req: Request, res: Response): Promise<Response>{
        const statusService = new StatusService();
        try{
            const status = await statusService.getStatusById(Number(req.params.id))
            res.json(status).status(200)
        }
        catch(error: any){
            res.json({error: error.message}).status(500)
        }
        return res;
    }

    public async UpdateStatusById(req: Request, res: Response): Promise<Response>{
        const statusService = new StatusService();
        try{
            const status = await statusService.updateStatusById(req.body, Number(req.params.id))
            res.json(status).status(200)
        }
        catch(error: any){
            res.json({error: error.message}).status(500)
        }
        return res;
    }

    public async createStatus(req: Request, res: Response): Promise<Response>{
        const statusService = new StatusService();
        try{
            const status = await statusService.createStatus(req.body)
            res.json(status).status(200)
        }
        catch(error: any){
            res.json({error: error.message}).status(500)
        }
        return res;
    }

    public async deleteStatusById(req: Request, res: Response): Promise<Response>{
        const statusService = new StatusService();
        try{
            const status = await statusService.deleteStatusById(Number(req.params.id))
            res.json(status).status(200)
        }
        catch(error: any){
            res.json({error: error.message}).status(500)
        }
        return res;
    }
    
}

export default new StatusController()