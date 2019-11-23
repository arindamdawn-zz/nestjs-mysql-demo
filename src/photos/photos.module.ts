import { Module } from '@nestjs/common';
import { PhotosService } from './photos.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PhotosEntity } from './entities/photos.entity';

@Module({
  imports: [TypeOrmModule.forFeature([PhotosEntity])],
  providers: [PhotosService],
})
export class PhotosModule {}
