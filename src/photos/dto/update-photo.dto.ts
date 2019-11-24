import { IsOptional, IsString } from 'class-validator';

export class UpdatePhotoDTO {
  @IsOptional()
  @IsString()
  url: string;
}
