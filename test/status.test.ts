import { TarefaRepository } from "../src/Repositories/tarefaRepository";
import { StatusRepository } from "../src/Repositories/statusRepository";
import { CategoriaRepository } from "../src/Repositories/categoriaRepository";
import { UserRepository } from "../src/Repositories/userRepository";
import { StatusService } from "../src/Services/statusService";
import { describe, it, afterAll } from '@jest/globals';

const tarefaRepository = new TarefaRepository() as jest.Mocked<TarefaRepository>;
const statusRepository = new StatusRepository() as jest.Mocked<StatusRepository>;
const categoriaRepository = new CategoriaRepository() as jest.Mocked<CategoriaRepository>;
const userRepository = new UserRepository() as jest.Mocked<UserRepository>;

describe("Status", () => {
    let statusService: StatusService;

    beforeEach(() => {
        statusService = new StatusService();
    });

    it("cria um usuario", async () => {

        const statusMock = { id: 1, name: "Test Status" }


        const statusCriado = await statusService.createStatus(statusMock);

        expect(statusCriado.id).toBeDefined();
        expect(statusCriado.name).toBe("Test Status");
    });


});


