import { LoginDto } from "../DTOs/loginDto";
import { User } from "../Models/user";
import userRepository, { UserRepository } from "../Repositories/userRepository"
import personalTrainerRepository, { PersonalTrainerRepository }  from "../Repositories/personalTrainerRepository";
import { v4 as uuidv4 } from 'uuid';
import {UserResDTO} from "../DTOs/user.dto";
import {UserConverter} from "../Converter/user.converter";

export class PersonalTrainerService {
    private readonly userRepository: UserRepository;
    private readonly personalTrainerRepository: PersonalTrainerRepository;
    constructor() {
        this.userRepository = userRepository
        this.personalTrainerRepository = personalTrainerRepository
    }

    public async findAllPersonalTrainers(): Promise<UserResDTO[]>{
        return (await this.personalTrainerRepository.getPersonalTrainers())
            .map(u => UserConverter.entityToRes(u));
    }

    public async findPersonalTrainerById(id: number): Promise<UserResDTO>{
        return UserConverter.entityToRes((await userRepository.getUserById(id)));
    }

    public async createPersonalTrainer(body: any): Promise<User> {
        const newUser = new User()
        newUser.nome = body.nome
        newUser.email = body.email
        newUser.senha = body.senha
        newUser.sobre = body.sobre
        newUser.experiencia = body.experiencia
        newUser.ehPersonal = true

        const existPeople = await this.personalTrainerRepository.getPersonalTrainerByEmail(newUser)
        if (existPeople != null) {
            throw new Error("Email ja cadastrado.")
        }

        return await this.personalTrainerRepository.createPersonalTrainer(newUser)
    }
}
