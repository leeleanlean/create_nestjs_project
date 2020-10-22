import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { UserEntity } from './index.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
  ) {}

  // Find one user
  async find(user: { username: string, password: string }) {
    return await this.userRepository.find(user);
  }

  // Find all
  async findAll(): Promise<UserEntity[]> {
    return await this.userRepository.find();
  }

  // Create user
  async create (params: any): Promise<UserEntity[]> {
    return await this.userRepository.save(params);
  }
}
