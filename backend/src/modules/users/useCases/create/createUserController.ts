import { Request, Response } from "express";
import { plainToInstance } from "class-transformer";
import { validate } from "class-validator";
import { CreateUserDTO } from "../../dtos/createDTO";
import { UserRepository } from '../../../users/infra/prisma/repositories/userRepository';
import { CreateUserUseCase } from "./createUserUseCase";


export class CreateUserController {
  async handle(req: Request, res: Response): Promise<Response> {
    const createUserDTO = plainToInstance(CreateUserDTO, req.body);

    const errors = await validate(createUserDTO);
    if (errors.length > 0) {
      return res.status(400).json(errors);
    }

    const createdById = req.headers["x-user-id"] as string;
    const usersRepository = new UserRepository();
    const createUserUseCase = new CreateUserUseCase(usersRepository);

    try {
      const user = await createUserUseCase.createUser(createUserDTO, createdById);
      return res.status(201).json(user);
    } catch (error: any) {
      return res.status(500).json({ error: error.message });
    }
  }
}