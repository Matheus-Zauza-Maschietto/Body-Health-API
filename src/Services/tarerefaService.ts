import statusRepository, { StatusRepository } from "../Repositories/statusRepository";
import { Tarefa } from "../Models/tarefa";
import { User } from "../Models/user";
import tarefaRepository, { TarefaRepository } from "../Repositories/tarefaRepository";
import userRepository, { UserRepository } from "../Repositories/userRepository";
import categoriaRepository, { CategoriaRepository } from "../Repositories/categoriaRepository";

export class TarefaService{
    private readonly tarefaRepository: TarefaRepository;
    private readonly statusRepository: StatusRepository;
    private readonly categoriaRepository: CategoriaRepository;
    private readonly userRepository: UserRepository;
    constructor(){
        this.tarefaRepository = tarefaRepository;
        this.userRepository = userRepository;
        this.statusRepository = statusRepository;
        this.categoriaRepository = categoriaRepository;
    }

    public async createTarefa(body: any, user: User): Promise<Tarefa>{
        let newTarefa = new Tarefa();
        newTarefa.descricao = body.descricao;
        newTarefa.titulo = body.titulo;
        newTarefa.dataCriacao = body.dataCriacao;
        newTarefa.dataConclusao = body.dataConclusao;
        newTarefa.responsavel = user;

        const categoria = await categoriaRepository.getCategoriasByUserAndId(user, body.categoriaId);
        if(categoria == null ){
            throw new Error("Categoria não encontrada.");
        }
        
        const status = await statusRepository.getStatusById(body.statusId);
        if(status == null){
            throw new Error("Status não encontrado.");
        }
        
        newTarefa.categoria = categoria;
        newTarefa.status = status;
        newTarefa = await tarefaRepository.createTarefa(newTarefa);
        if(newTarefa == null){
            throw new Error("Erro ao criar tarefa");
        }

        return newTarefa;
    }

    public async getTarefasByUser(user: User): Promise<Tarefa[]>{
        let tarefas = await tarefaRepository.getTarefasByUser(user);
        return tarefas;
    }

    
    public async getTarefasByUserAndId(user: User, id: string): Promise<Tarefa>{
        let tarefa = await tarefaRepository.getTarefasByUserAndId(user, Number(id));

        if(tarefa == null){
            throw new Error("Tarefa não encontrada.");
        }

        return tarefa;
    }

    public async updateTarefa(body: any, user: User, id: string): Promise<Tarefa>{
        let tarefa = await tarefaRepository.getTarefasByUserAndId(user, Number(id));

        if(tarefa == null){
            throw new Error("Tarefa não encontrada.");
        }

        tarefa.descricao = body.descricao;
        tarefa.titulo = body.titulo;
        tarefa.dataCriacao = body.dataCriacao;
        tarefa.dataConclusao = body.dataConclusao;
        
        const categoria = await categoriaRepository.getCategoriasByUserAndId(user, body.categoriaId);
        if(categoria == null ){
            throw new Error("Categoria não encontrada.");
        }
        
        const status = await statusRepository.getStatusById(body.statusId);
        if(status == null){
            throw new Error("Status não encontrado.");
        }
        tarefa.responsavel = user;
        
        tarefa = await tarefaRepository.updateTarefa(tarefa);

        return tarefa;
    }

    public async deleteTarefaByUserAndId(user: User, id: string): Promise<Tarefa>{
        let tarefa = await tarefaRepository.getTarefasByUserAndId(user, Number(id));

        if(tarefa == null){
            throw new Error("Tarefa não encontrada.");
        }

        await tarefaRepository.deleteTarefaById(tarefa.id);

        return tarefa;
    }
}
