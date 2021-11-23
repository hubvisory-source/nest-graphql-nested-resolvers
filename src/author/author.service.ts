import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Author } from './entities/author.entity';

@Injectable()
export class AuthorService {
  async findAll(): Promise<Author[]> {
    return this.authorsRepository.find();
  }

  async findOne(id: string): Promise<Author> {
    const user = await this.authorsRepository.findOne({ id });
    if (!user) {
      throw new NotFoundException(`Author #${id} not found`);
    }
    return user;
  }

  constructor(
    @InjectRepository(Author)
    private readonly authorsRepository: Repository<Author>,
  ) {}
}
