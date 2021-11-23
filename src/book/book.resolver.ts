import { Args, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';
import { AuthorService } from 'src/author/author.service';

import { BookService } from './book.service';
import { Book } from './entities/book.entity';

@Resolver(() => Book)
export class BookResolver {
  constructor(
    private readonly bookService: BookService,
    private readonly authorService: AuthorService,
  ) {}

  @Query(() => [Book], { name: 'books' })
  findAll() {
    return this.bookService.findAll();
  }

  @Query(() => Book, { name: 'book' })
  findOne(@Args('id', { type: () => String }) id: string) {
    return this.bookService.findOne(id);
  }

  @ResolveField()
  async author(@Parent() book: Book) {
    return this.authorService.findOne(book.authorId);
  }
}
