import { Column, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./user";

@Entity()
export class Categoria{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nome: string;

    @Column({
        length: 7
    })
    cor: string;

    @ManyToOne(() => User)
    @JoinColumn()
    responsavel: User;

}