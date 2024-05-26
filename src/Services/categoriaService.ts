import { User } from "../Models/user";
import { Categoria } from "../Models/categoria";
import categoriaRepository, { CategoriaRepository } from "../Repositories/categoriaRepository";
import userRepository, { UserRepository } from "../Repositories/userRepository";

export class CategoriaService{
    private readonly categoriaRepository: CategoriaRepository;
    private readonly userRepository: UserRepository;
    constructor(){
        this.userRepository = userRepository;
        this.categoriaRepository = categoriaRepository;
    }

    public async createCategoria(body: any, user: User,): Promise<Categoria>{
        const newCategoria = new Categoria();
        newCategoria.nome = body.nome;
        newCategoria.cor = body.cor;
        
        if(newCategoria.cor.length > 6){
            throw new Error("A cor deve ser escrita em hexadecimal. Devendo conter 6 caracteres.");
        }

        newCategoria.responsavel = user;

        return await categoriaRepository.createCategoria(newCategoria);
    }

    public async updateCategoria(body: any, user: User, id: number): Promise<Categoria>{
        const updatedCategoria = await categoriaRepository.getCategoriasByUserAndId(user, id);
        
        if(updatedCategoria == null){
            throw new Error("Categoria não encontrada.")
        }

        updatedCategoria.nome = body.nome;
        updatedCategoria.cor = body.cor;
        updatedCategoria.responsavel = user;

        if(updatedCategoria.cor.length > 6){
            throw new Error("A cor deve ser escrita em hexadecimal. Devendo conter 6 caracteres.");
        }

        await categoriaRepository.updateCategoriasById(updatedCategoria.id, updatedCategoria);

        return updatedCategoria;
    }

    public async getCategorias(user: User): Promise<Categoria[]>{
        return await categoriaRepository.getCategoriasByUser(user);
    }

    public async getCategoriaByUserAndId(user: User, id: string): Promise<Categoria | null>{
        const categoria = await categoriaRepository.getCategoriasByUserAndId(user, id);
        if(categoria == null){
            throw new Error("Categoria não encontrada.")
        }

        return categoria;
    }

    public async deleteCategoriaByUserAndId(user: User, id: number): Promise<Categoria>{
        const categoria = await categoriaRepository.getCategoriasByUserAndId(user, id);

        if(categoria == null){
            throw new Error("Categoria não encontrada.")
        }

        await categoriaRepository.deleteCategoriasById(categoria.id);

        return categoria;
    }
}