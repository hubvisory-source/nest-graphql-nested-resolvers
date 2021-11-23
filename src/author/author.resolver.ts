import { Args, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';
import { BookService } from 'src/book/book.service';

import { AuthorService } from './author.service';
import { Author } from './entities/author.entity';

@Resolver(() => Author)
export class AuthorResolver {
  constructor(
    private readonly authorService: AuthorService,
    private readonly bookService: BookService,
  ) {}

  @Query(() => [Author], { name: 'authors' })
  findAll() {
    return this.authorService.findAll();
  }

  @Query(() => Author, { name: 'author' })
  findOne(@Args('id', { type: () => String }) id: string) {
    return this.authorService.findOne(id);
  }

  @ResolveField()
  async books(@Parent() author: Author) {
    return this.bookService.findAll({ authorID: author.id });
  }
}
