import { IsNotEmpty, IsString, IsArray } from 'class-validator';
import { CreateCategoryDTO } from './create-category.dto';

export class CreateQuestionDTO {
  @IsNotEmpty()
  @IsString()
  title: string;
  @IsNotEmpty()
  @IsString()
  text: string;
  @IsArray()
  categories: CreateCategoryDTO[];
}
