import { User } from "../Models/user";
export declare class UserRepository {
    private readonly userDataSource;
    constructor();
    createUser(newUser: User): Promise<User>;
    getUserByEmailAndPassword(user: User): Promise<User | null>;
    getUserByEmail(user: User): Promise<User | null>;
    loginUser(user: User): Promise<User>;
}
declare const _default: UserRepository;
export default _default;
