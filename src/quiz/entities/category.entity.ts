import { Column, PrimaryGeneratedColumn, Entity, ManyToMany } from 'typeorm';
import { QuestionEntity } from './question.entity';

@Entity({ name: 'categories' })
export class CategoryEntity {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  name: string;

  @ManyToMany(
    type => QuestionEntity,
    questionEntity => questionEntity.categories,
  )
  questions: QuestionEntity[];
}
