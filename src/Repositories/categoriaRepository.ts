import { User } from "src/Models/user";
import { AppDataSource } from "../data-source";
import { Categoria } from "../Models/categoria"
import { Repository } from "typeorm";

export class CategoriaRepository{
    private readonly categoriaDataSource: Repository<Categoria>;
    constructor(){
        this.categoriaDataSource = AppDataSource.getRepository(Categoria);
    }

    public async createCategoria(categoria: Categoria): Promise<Categoria> {
        return await this.categoriaDataSource.save(categoria);
    }

    public async getCategoriasByUser(user: User): Promise<Categoria[]>
    {
        return  await this.categoriaDataSource.find({
            where: {
                responsavel: user
            }
        })
    }

    public async getCategoriasByUserAndId(user: User, id: string | number): Promise<Categoria | null>
    {
        return await this.categoriaDataSource.findOne({
            where: {
                responsavel: user,
                id: Number(id)
            }
        })
    }

    public async deleteCategoriasById(id: number): Promise<any>
    {
        return await this.categoriaDataSource.createQueryBuilder()
        .delete()
        .from(Categoria)
        .where("id = :id", { id: Number(id) })
        .execute()
    }

    public async updateCategoriasById(id: number, categoria: Categoria): Promise<any>
    {
        return await this.categoriaDataSource.save(categoria)
    }

    
    
}

export default new CategoriaRepository()