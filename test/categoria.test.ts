import { TarefaRepository } from "../src/Repositories/tarefaRepository";
import { StatusRepository } from "../src/Repositories/statusRepository";
import { CategoriaRepository } from "../src/Repositories/categoriaRepository";
import { UserRepository } from "../src/Repositories/userRepository";
import { CategoriaService } from "../src/Services/categoriaService";
import { describe, it, afterAll } from '@jest/globals';
import { UserService } from "../src/Services/userService";

const tarefaRepository = new TarefaRepository() as jest.Mocked<TarefaRepository>;
const statusRepository = new StatusRepository() as jest.Mocked<StatusRepository>;
const categoriaRepository = new CategoriaRepository() as jest.Mocked<CategoriaRepository>;
const userRepository = new UserRepository() as jest.Mocked<UserRepository>;

describe("Categoria", () => {
    let categoriaService: CategoriaService;

    beforeEach(() => {
        categoriaService = new CategoriaService();
    });

    it("cria uma categoria", async () => {
        const responsavel = { id: 1, nome: "Test User", peso: 1, senha: "Test Password", email: "teste@teste", token: "Test", tokenExpiracao: new Date() }

        await userRepository.createUser(responsavel)

        const categoriaMock = { id: 1, nome: "Test Categoria", cor: "Test Cor" }

        const categoriaCriada = await categoriaService.createCategoria(categoriaMock, responsavel);

        expect(categoriaCriada.id).toBeDefined();
        expect(categoriaCriada.nome).toBe("Test Categoria");

    });


});


