import { IsOptional, IsNotEmpty, IsString, IsArray } from 'class-validator';

export class CategoryDTO {
  @IsOptional()
  id: number;
  @IsNotEmpty()
  @IsString()
  name: string;
}
export class CreateCategoryDTO {
  @IsNotEmpty()
  @IsArray()
  categories: CategoryDTO[];
}
