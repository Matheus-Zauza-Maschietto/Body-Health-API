import { LoginDto } from "../DTOs/loginDto";
import { User } from "../Models/user";
export declare class UserService {
    private readonly userRepository;
    constructor();
    createUser(body: any): Promise<User>;
    loginUser(body: any): Promise<LoginDto>;
}
