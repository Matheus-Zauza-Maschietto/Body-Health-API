import { LoginDto } from "../DTOs/loginDto";
import { User } from "../Models/user";
import userRepository, { UserRepository } from "../Repositories/userRepository"
import personalTrainerRepository, { PersonalTrainerRepository }  from "../Repositories/personalTrainerRepository";
import { v4 as uuidv4 } from 'uuid';
import {UserResDTO} from "../DTOs/user.dto";
import {UserConverter} from "../Converter/user.converter";
import { PassAutomato } from "../Automatos/pass.automato";
import { Automato } from "../Models/automato";

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

        const pass1Automato = new PassAutomato(body.senha, [
            [
                null, new Automato("[a-zA-Z!@#$%&*\(\)0-9]", false), null, null, null, null, null ,null 
            ],
            [
                null, null, new Automato("[a-zA-Z!@#$%&*\(\)0-9]", false), null, null, null, null ,null 
            ],
            [
                null, null, null, new Automato("[a-zA-Z!@#$%&*\(\)0-9]", false),  null, null, null ,null 
            ],
            [
                null, null, null, null, new Automato("[a-zA-Z!@#$%&*\(\)0-9]", false), null, null ,null 
            ],
            [
                null, null, null, null, null, new Automato("[a-zA-Z!@#$%&*\(\)0-9]", false), null ,null 
            ],
            [
                null, null, null, null, null, null, new Automato("[a-zA-Z!@#$%&*\(\)0-9]", false), null 
            ],
            [
                null, null, null, null, null ,null, null, new Automato("[a-zA-Z!@#$%&*\(\)0-9]", true)
            ],
        ])

        const pass2Automato = new PassAutomato(body.senha, [
            [
                new Automato("[a-z]", false), new Automato("[!@#$%&*\(\)]", false), new Automato("A-Z", false), new Automato("0-9", false), null, null, null, null, null, null,
            ],
            [
                null, new Automato("[a-z]", false), null, null, new Automato("[A-Z]", false), null, null, null, null,
            ],
            [
                null, null, new Automato("[a-z]", false), null, null, new Automato("[0-9]", false), null, null, null
            ],
            [
                null, null, null, new Automato("[a-z]", true), null, null, new Automato("[!@#$%&*\(\)]", false), null, null
            ],
            [
                null, null, null, null, new Automato("[a-z]", true), null, null, new Automato("[0-9]", true), null
            ],
            [
                null, null, null, null, null, new Automato("[a-z]", true), null, null, new Automato("[A-Z]", true)
            ],
            [
                null, null, null, null, null, null, new Automato("[a-z]", true),
            ],
            [
                null, null, null, null, null, null, null, new Automato("[a-z]", true),
            ],
            [
                null, null, null, null, null, null, null, null, new Automato("[a-z]", true),
            ],
        ])

        if(!(pass1Automato.validatePass() == true && pass2Automato.validatePass() == true)){
            throw new Error("A senha do usuario deve conter 8 caracteres");
        }
        

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
