import { User } from "./user";
import { Categoria } from "./categoria";
import { Status } from "./status";
import { Tipo } from "./tipo";
export declare class Tarefa {
    id: number;
    titulo: string;
    descricao: string;
    dataCriacao: Date;
    dataConclusao: Date;
    responsavel: User;
    categoria: Categoria;
    status: Status;
    tipo: Tipo;
}
