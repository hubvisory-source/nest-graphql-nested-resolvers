import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { CreateAuthorInput } from './dto/create-author.input';
import { UpdateAuthorInput } from './dto/update-author.input';
import { Author } from './entities/author.entity';

interface IFindAuthorFilters {
  id?: string;
  bookID?: string;
}
@Injectable()
export class AuthorService {
  create(createAuthorInput: CreateAuthorInput) {
    console.log(createAuthorInput);
    return 'This action adds a new author';
  }

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

  update(id: number, updateAuthorInput: UpdateAuthorInput) {
    console.log(updateAuthorInput);
    return `This action updates a #${id} author`;
  }

  remove(id: number) {
    return `This action removes a #${id} author`;
  }

  constructor(
    @InjectRepository(Author)
    private readonly authorsRepository: Repository<Author>,
  ) {}
}
