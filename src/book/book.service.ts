import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Book } from './entities/book.entity';

export class IFindBooksFIlters {
  authorID?: string;
}
@Injectable()
export class BookService {
  findAll(filters?: IFindBooksFIlters) {
    console.log('Fetching Books');
    return this.booksRepository.find({
      where: {
        ...(filters?.authorID.length > 0 && { authorId: filters.authorID }),
      },
    });
  }
  findOne(id: string) {
    const book = this.booksRepository.findOne({ id });
    if (!book) {
      throw new NotFoundException(`Book #${id} not found`);
    }
    return book;
  }
  constructor(
    @InjectRepository(Book)
    private readonly booksRepository: Repository<Book>,
  ) {}
}
