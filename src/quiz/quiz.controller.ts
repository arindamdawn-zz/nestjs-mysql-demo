import { Controller, Post, Body } from '@nestjs/common';
import { QuizService } from './quiz.service';
import { Category } from './interfaces/category.interface';
import { CreateCategoryDTO } from './dto/create-category.dto';
import { async } from 'rxjs/internal/scheduler/async';
import { CreateQuestionDTO } from './dto/create-question.dto';
import { Question } from './interfaces/question.interface';

@Controller('quiz')
export class QuizController {
  constructor(private quizService: QuizService) {}

  @Post('categories')
  async createCategories(
    @Body() categories: CreateCategoryDTO,
  ): Promise<Category[]> {
    return await this.quizService.createCategories(categories);
  }

  @Post('question')
  async createQuestion(@Body() question: CreateQuestionDTO): Promise<Question> {
    return await this.quizService.createQuestion(question);
  }
}
