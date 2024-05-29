import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import {User} from "./user";

@Entity()
export class Session {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    pessoaId: User

    @Column()
    personalTrainerId: User

    @Column()
    dataHora: Date

    @Column()
    duracao: number

    @Column()
    localizacao: string
}