import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CategoryEntity } from './entities/category.entity';
import { Repository } from 'typeorm';
import { QuestionEntity } from './entities/question.entity';
import { CreateCategoryDTO } from './dto/create-category.dto';
import { Category } from './interfaces/category.interface';
import { Question } from './interfaces/question.interface';

@Injectable()
export class QuizService {
  constructor(
    @InjectRepository(CategoryEntity)
    private readonly categoryRepository: Repository<CategoryEntity>,

    @InjectRepository(QuestionEntity)
    private readonly questionRepository: Repository<QuestionEntity>,
  ) {}

  async createCategories(category: CreateCategoryDTO): Promise<Category[]> {
    return await this.categoryRepository.save(category.categories);
  }

  async createQuestion(question): Promise<Question> {
    return await this.questionRepository.save(question);
  }
}
