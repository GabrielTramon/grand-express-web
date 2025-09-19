import { Users } from "@prisma/client";
import { CreateUserDTO } from "modules/users/dtos/createDTO";
import { IUserRepository } from "modules/users/repositories/IUserRepository";

export class CreateUserUseCase{
    constructor(private userRepository: IUserRepository){}

  async createUser(data: CreateUserDTO, createdById: string): Promise<Users> {
    const user = await this.userRepository.create(data, createdById);
    return user;
  }
}