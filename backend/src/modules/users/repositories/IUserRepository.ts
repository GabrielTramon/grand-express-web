import { CreateUserDTO } from "modules/users/dtos/createDTO";
import { UserEntity } from "modules/users/entities/user";

export interface IUserRepository {
    create(data: CreateUserDTO, createdById: string): Promise<UserEntity>;
}