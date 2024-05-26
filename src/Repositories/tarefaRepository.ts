import { AppDataSource } from "../data-source";
import { Tarefa } from "../Models/tarefa";
import { User } from "../Models/user";
import { Repository } from "typeorm";


export class TarefaRepository{
    private readonly TarefaDataSource: Repository<Tarefa>;
    constructor(){
        this.TarefaDataSource = AppDataSource.getRepository(Tarefa);
    }

    public async createTarefa(newTarefa: Tarefa): Promise<Tarefa>{
        return await this.TarefaDataSource.save(newTarefa);
    }

    public async updateTarefa(tarefa: Tarefa): Promise<Tarefa>{
        return await this.TarefaDataSource.save(tarefa);
    }
    
    public async getTarefasByUser(user: User): Promise<Tarefa[]>{
        return await this.TarefaDataSource.find({
            where: {
                responsavel: user
            }
        });
    }

    public async getTarefasByUserAndId(user: User, id: number): Promise<Tarefa | null>{
        return await this.TarefaDataSource.findOneBy({
            responsavel: user,
            id: id
        });
    }

    public async deleteTarefaById(id: number): Promise<any>
    {
        return await this.TarefaDataSource.createQueryBuilder()
        .delete()
        .from(Tarefa)
        .where("id = :id", { id: Number(id) })
        .execute()
    }
}

export default new TarefaRepository();