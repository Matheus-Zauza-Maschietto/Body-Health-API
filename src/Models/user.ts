import { Column, Entity, JoinColumn, ManyToMany, OneToMany, PrimaryGeneratedColumn, Unique } from "typeorm";
import {Session} from "./session";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    nome: string

    @Column({ nullable: true })
    peso: number

    @Column()
    dataNascimento: Date

    @Column({ nullable: true })
    experiencia: number

    @Column()
    sexo: string

    @Column({ nullable: true })
    sobre: string

    @OneToMany(() => Session, (session) => session.personalTrainer)
    @OneToMany(() => Session, (session) => session.pessoa)
    sessoes: Session[];

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

    @Column({ nullable: true })
    xp: number

    @Column()
    ehPersonal: boolean
}