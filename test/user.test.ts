import { TarefaRepository } from "../src/Repositories/tarefaRepository";
import { StatusRepository } from "../src/Repositories/statusRepository";
import { CategoriaRepository } from "../src/Repositories/categoriaRepository";
import { UserRepository } from "../src/Repositories/userRepository";
import { UserService } from "../src/Services/userService";
import { describe, it, afterAll } from '@jest/globals';

const tarefaRepository = new TarefaRepository()
const statusRepository = new StatusRepository()
const categoriaRepository = new CategoriaRepository()
const userRepository = new UserRepository()

describe("Usuario", () => {
    let userService: UserService;

    beforeEach(() => {
        userService = new UserService();
    });

    it("cria um usuario", async () => {

        const userMock = { id: 1, nome: "Test User", peso: 1, senha: "Test Password", email: "teste@teste.com", token: "Test", tokenExpiracao: new Date()}


        const usuarioCriado = await userService.createUser(userMock);

        expect(usuarioCriado.id).toBeDefined();
        expect(usuarioCriado.email).toBe("Test Password");
        expect(usuarioCriado.nome).toBe("Test User");
    });


});


