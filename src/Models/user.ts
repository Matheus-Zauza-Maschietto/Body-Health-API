import { Column, Entity, PrimaryGeneratedColumn, Unique } from "typeorm";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    nome: string

    @Column()
    peso: number

    @Column()
    senha: string

    @Column({
        unique: true,
    })
    email: string

    @Column({ nullable: true })
    token: string

    @Column({ nullable: true })
    tokenExpiracao: Date

}