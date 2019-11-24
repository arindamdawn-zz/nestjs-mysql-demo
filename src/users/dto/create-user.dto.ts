import { IsNotEmpty, IsString, IsEmail, IsArray } from 'class-validator';
import { CreatePhotoDTO } from 'src/photos/dto/create-photo.dto';

export class CreateUserDTO {
  @IsNotEmpty()
  @IsString()
  @IsEmail()
  email: string;
  @IsNotEmpty()
  @IsString()
  password: string;

  @IsArray()
  photos: CreatePhotoDTO[];
}
