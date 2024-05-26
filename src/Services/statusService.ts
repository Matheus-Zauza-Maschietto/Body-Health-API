import { Status } from "../Models/status";
import statusRepository, { StatusRepository } from "../Repositories/statusRepository";


export class StatusService{
    private readonly statusRepository: StatusRepository;
    constructor(){
        this.statusRepository = statusRepository;
    }

    public async getStatus(): Promise<Status[]>{
        return await this.statusRepository.getStatus();
    }

    public async getStatusById(id: number): Promise<Status>{
        const status = await this.statusRepository.getStatusById(id);

        if(status == null){
            throw new Error("Status não encontrado.")
        }

        return status
    }

    public async updateStatusById(body: any, id: number): Promise<Status>{
        const updatedStatus = await this.statusRepository.getStatusById(id);

        if(updatedStatus == null){
            throw new Error("Status não encontrado.")
        }

        updatedStatus.name = body.nome;
        await this.statusRepository.updateStatus(updatedStatus);

        return updatedStatus;
    }

    public async createStatus(body: any): Promise<Status>{
        const newStatus = new Status();
        newStatus.name = body.nome;
        return await this.statusRepository.createStatus(newStatus);
    }

    public async deleteStatusById(id: number): Promise<Status>{
        const status = await this.statusRepository.getStatusById(id);

        if(status == null){
            throw new Error("Status não encontrado.")
        }

        await this.statusRepository.deleteStatusById(id);

        return status
    }
}