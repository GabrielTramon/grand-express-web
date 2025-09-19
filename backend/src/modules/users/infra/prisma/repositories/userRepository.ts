import { CreateUserDTO } from "modules/users/dtos/createDTO";
import { UserEntity } from "modules/users/entities/user";
import { IUserRepository } from "modules/users/repositories/IUserRepository";
import bcrypt from "bcrypt";
import { prisma } from "../../../../../../prisma/prismaClient";

export class UserRepository implements IUserRepository {
  async create(data: CreateUserDTO, createdById: string): Promise<UserEntity> {
    const hashedPassword = await bcrypt.hash(data.password, 10);

    const user = await prisma.users.create({
      data: {
        name: data.name,
        email: data.email,
        password: hashedPassword,
        phone: data.phone,
        role: data.role,
        companyId: data.companyId,
        nationalId: data.nationalId,
        isDeleted: false,
        createdById,
      },
    });

    return user;
  }
}