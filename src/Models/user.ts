import { Column, Entity, PrimaryGeneratedColumn, Unique } from "typeorm";
import {Sessao} from "./sessao";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    nome: string

    @Column()
    peso: number

    @Column()
    dataNascimento: Date

    @Column()
    experiencia: number

    @Column()
    sexo: string

    @Column()
    sobre: string

    sessoes: Sessao[];

    @Column({
        unique: true,
    })
    email: string

    @Column()
    senha: string

    @Column({ nullable: true })
    token: string

    @Column({ nullable: true })
    tokenExpiracao: Date

}