import { User } from "src/Models/user";
export declare class LoginDto {
    email: string;
    token: string;
    tokenExpiracao: Date;
    mensagem: string;
    constructor(user: User, mensagem: string);
}
