import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UsersEntity } from './entities/users.entity';
import { Repository, DeleteResult, UpdateResult } from 'typeorm';
import { User } from './interfaces/user.interface';
import { UpdateUserDTO } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UsersEntity)
    private readonly usersRepository: Repository<UsersEntity>, // @InjectRepository(PhotosEntity) // private readonly photosRepository: Repository<PhotosEntity>,
  ) {}

  async create(user: User): Promise<User> {
    return await this.usersRepository.save(user);
  }

  async findAll(): Promise<User[]> {
    return await this.usersRepository.find({ relations: ['photos'] });
  }

  async findOne(id: number): Promise<User> {
    return await this.usersRepository.findOne(id, { relations: ['photos'] });
  }

  async update(id: number, user: UpdateUserDTO): Promise<UpdateResult> {
    return await this.usersRepository.update(id, user);
  }

  async delete(id: number): Promise<DeleteResult> {
    return await this.usersRepository.delete(id);
  }
}
