import {User} from "../Models/user";
import {UserResDTO} from "../DTOs/user.dto";

export class UserConverter{

    public static entityToRes(entity: User | null): UserResDTO {
        const dto: UserResDTO = new UserResDTO();
        if(!entity){
            return dto;
        }
        dto.nome = entity.nome;
        dto.email = entity.email;
        dto.dataNascimento = entity.dataNascimento;
        dto.sexo = entity.sexo;
        dto.id = entity.id;
        dto.experiencia = entity.experiencia;
        dto.sobre = entity.sobre;

        return dto;
    }
}