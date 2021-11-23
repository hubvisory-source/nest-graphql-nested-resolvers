import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthorService } from 'src/author/author.service';
import { Author } from 'src/author/entities/author.entity';

import { BookResolver } from './book.resolver';
import { BookService } from './book.service';
import { Book } from './entities/book.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Book, Author])],
  providers: [BookResolver, BookService, AuthorService],
})
export class BookModule {}
