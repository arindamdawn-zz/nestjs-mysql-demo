import { IsNotEmpty, IsString, IsArray } from 'class-validator';
import { CreateCategoryDTO, CategoryDTO } from './create-category.dto';
import { ApiModelProperty } from '@nestjs/swagger';

export class CreateQuestionDTO {
  @IsNotEmpty()
  @IsString()
  @ApiModelProperty({
    description: 'Title of the question',
    required: true,
    type: String,
  })
  title: string;
  @IsNotEmpty()
  @IsString()
  @ApiModelProperty({
    description: 'Question text',
    required: true,
    type: String,
  })
  text: string;
  @IsArray()
  @ApiModelProperty({
    description: 'Categories array',
    type: Array
  })
  categories: CreateCategoryDTO;
}
