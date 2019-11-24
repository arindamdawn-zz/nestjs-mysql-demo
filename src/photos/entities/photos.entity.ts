import { Column, PrimaryGeneratedColumn, Entity, ManyToOne } from 'typeorm';
import { UsersEntity } from 'src/users/entities/users.entity';

@Entity({ name: 'photos' })
export class PhotosEntity {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  url: string;

  @ManyToOne(
    type => UsersEntity,
    usersEntity => usersEntity.photos,
    { onDelete: 'CASCADE' },
  )
  user: UsersEntity;
}
