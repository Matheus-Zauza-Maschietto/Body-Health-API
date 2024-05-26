import { AppDataSource } from "../data-source";
import { Status } from "../Models/status";
import { Repository } from "typeorm";

export class StatusRepository{
    private readonly StatusDataSource: Repository<Status>;
    constructor(){
        this.StatusDataSource = AppDataSource.getRepository(Status);
    }

    public async getStatus(): Promise<Status[]>{
        return await this.StatusDataSource.find();
    }

    public async getStatusById(id: number): Promise<Status | null>{
        return await this.StatusDataSource.findOneBy({
            id: id
        });
    }

    public async updateStatus(status: Status): Promise<any>{
        return await this.StatusDataSource.save(status);
    }

    public async createStatus(status: Status): Promise<any>{
        return await this.StatusDataSource.save(status);
    }

    public async deleteStatusById(id: number): Promise<any>{
        return await this.StatusDataSource.createQueryBuilder()
        .delete()
        .from(Status)
        .where("id = :id", { id: id })
        .execute()
    }
}

export default new StatusRepository()