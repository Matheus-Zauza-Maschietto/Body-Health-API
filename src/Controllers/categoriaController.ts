import { Request, Response } from "express";
import { CategoriaService } from "../Services/categoriaService"
import { UserService } from "../Services/userService";

class CategoriaController{

    public async createCategoria(req: Request, res: Response): Promise<Response>{
        const categoriaService = new CategoriaService();
        const userService = new UserService();
        try{
            const user = await userService.validateToken(req.headers.authorization)
            let categoria = await categoriaService.createCategoria(req.body, user)
            res.json(categoria).status(201)
        }
        catch(error: any){
            res.json({"error": error.message}).status(500)
        }

        return res;
    }

    public async updateCategoriaById(req: Request, res: Response): Promise<Response>{
        const categoriaService = new CategoriaService();
        const userService = new UserService();
        try{
            const user = await userService.validateToken(req.headers.authorization)
            let categoria = await categoriaService.updateCategoria(req.body, user, Number(req.params.id))
            res.json(categoria).status(201)
        }
        catch(error: any){
            res.json({"error": error.message}).status(500)
        }

        return res;
    }

    public async deleteCategoriaById(req: Request, res: Response){
        const categoriaService = new CategoriaService();
        const userService = new UserService();
        try{
            const user = await userService.validateToken(req.headers.authorization)
            let categorias = await categoriaService.deleteCategoriaByUserAndId(user, Number(req.params.id))
            res.json(categorias).status(200)
        }
        catch(error: any){
            res.json({error: error.message}).status(500)
        }
        return res;
    }

    public async getCategoriaById(req: Request, res: Response){
        const categoriaService = new CategoriaService();
        const userService = new UserService();
        try{
            const user = await userService.validateToken(req.headers.authorization)
            let categorias = await categoriaService.getCategoriaByUserAndId(user, req.params.id)
            res.json(categorias).status(200)
        }
        catch(error: any){
            res.json({error: error.message}).status(500)
        }
        return res;
    }

    public async getCategorias(req: Request, res: Response){
        const categoriaService = new CategoriaService();
        const userService = new UserService();
        try{
            const user = await userService.validateToken(req.headers.authorization)
            let categorias = await categoriaService.getCategorias(user)
            res.json(categorias).status(200)
        }
        catch(error: any){
            res.json({error: error.message}).status(500)
        }
        return res;
    }
}

export default new CategoriaController()