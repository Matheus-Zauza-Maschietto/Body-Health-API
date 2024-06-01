import { User } from "../Models/user"

export class LoginDto{
    public email: string
    public token: string
    public tokenExpiracao: Date
    public mensagem: string

    constructor(user: User, mensagem: string){
        this.email = user.email
        this.token = user.token
        this.tokenExpiracao = user.tokenExpiracao
        this.mensagem = mensagem
    }

}