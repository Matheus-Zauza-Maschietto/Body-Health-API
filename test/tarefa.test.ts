import { StatusRepository } from "../src/Repositories/statusRepository";
import { CategoriaRepository } from "../src/Repositories/categoriaRepository";
import { TarefaService } from "../src/Services/tarerefaService";
import { describe, it } from '@jest/globals';
import { UserRepository } from "../src/Repositories/userRepository";

const statusRepository = new StatusRepository();
const categoriaRepository = new CategoriaRepository()
const userRepository = new UserRepository()

describe("Tarefa", () => {
    let tarefaService: TarefaService;

    beforeEach(() => {
        tarefaService = new TarefaService();
    });

    it("cria uma tarefa", async () => {
        const userMock = { id: 1, nome: "Test User", peso: 1, senha: "Test Password", email: "teste@teste.com", token: "Test", tokenExpiracao: new Date()}

        const tarefaMock = {
            id: 1,
            titulo: "Test Tarefa",
            descricao: "Test Description",
            dataCriacao: new Date(),
            dataConclusao: new Date(),
            categoriaId: 1,
            responsavel: userMock,
            statusId: 1
        };

        await userRepository.createUser(userMock)
        await categoriaRepository.createCategoria({ id: 1, nome: "Test Categoria", cor: "Test Cor", responsavel: userMock })
        await statusRepository.createStatus({ id: 1, name: "Test Status" });

        const tarefaCriada = await tarefaService.createTarefa(tarefaMock, userMock);

        expect(tarefaCriada.id).toBeDefined();
        expect(tarefaCriada.titulo).toBe("Test Titulo");
        expect(tarefaCriada.descricao).toBe("Test Description");
    });


});


