import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import {User} from "./user";

@Entity()
export class Session {
    @PrimaryGeneratedColumn()
    id: number

    @ManyToOne(() => User, (user) => user.sessoes)
    pessoa: User

    @ManyToOne(() => User, (user) => user.sessoes)
    personalTrainer: User

    @Column()
    dataHora: Date

    @Column()
    duracao: number

    @Column()
    localizacao: string
}