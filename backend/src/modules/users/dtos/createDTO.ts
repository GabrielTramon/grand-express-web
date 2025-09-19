import { Role } from "@prisma/client";
import { IsDate, IsEmail, IsOptional, IsString, IsStrongPassword } from "class-validator";

export class CreateUserDTO {
  @IsString()
  name: string;

  @IsEmail()
  email: string

  @IsStrongPassword()
  password: string;

  @IsString()
  phone: string;

  role: Role;

  @IsString()
  @IsOptional()
  companyId?: string;

  @IsString()
  nationalId: string;
}
