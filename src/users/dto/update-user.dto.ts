import { IsOptional, IsString, IsEmail, IsArray } from 'class-validator';

export class UpdateUserDTO {
  @IsOptional()
  @IsString()
  @IsEmail()
  email: string;
  @IsOptional()
  @IsString()
  password: string;
}
