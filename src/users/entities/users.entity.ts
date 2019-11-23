import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { PhotosEntity } from 'src/photos/entities/photos.entity';

@Entity({ name: 'users' })
export class UsersEntity {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  email: string;
  @Column()
  password: string;

  @OneToMany(
    type => PhotosEntity,
    photosEntity => photosEntity.user,
  )
  photos: PhotosEntity[];
}
