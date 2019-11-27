import { Controller, Post, Body } from '@nestjs/common';
import { QuizService } from './quiz.service';
import { Category } from './interfaces/category.interface';
import { CreateCategoryDTO } from './dto/create-category.dto';
import { async } from 'rxjs/internal/scheduler/async';
import { CreateQuestionDTO } from './dto/create-question.dto';
import { Question } from './interfaces/question.interface';
import {
  ApiUseTags,
  ApiCreatedResponse,
  ApiForbiddenResponse,
} from '@nestjs/swagger';

@Controller('quiz')
@ApiUseTags('quiz')
export class QuizController {
  constructor(private quizService: QuizService) {}

  @Post('categories')
  @ApiCreatedResponse({ description: 'categories added successfully' })
  @ApiForbiddenResponse({ description: 'Forbidden' })
  async createCategories(
    @Body() categories: CreateCategoryDTO,
  ): Promise<Category[]> {
    return await this.quizService.createCategories(categories);
  }

  @Post('question')
  @ApiCreatedResponse({ description: 'Question created successfully' })
  @ApiForbiddenResponse({ description: 'forbidden' })
  async createQuestion(@Body() question: CreateQuestionDTO): Promise<Question> {
    return await this.quizService.createQuestion(question);
  }
}
