import { Field, ObjectType } from '@nestjs/graphql';
import { Book } from 'src/book/entities/book.entity';
import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity({ name: 'authors' })
@ObjectType()
export class Author {
  @PrimaryColumn()
  @Field(() => String, { description: 'Identifier for the Author' })
  id: string;

  @Column('string')
  @Field(() => String, { description: 'Name of the author' })
  name: string;

  @Field(() => [Book], { description: 'Name of the author' })
  books: Book[];
}
