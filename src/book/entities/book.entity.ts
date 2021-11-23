import { Field, ObjectType } from '@nestjs/graphql';
import { Author } from 'src/author/entities/author.entity';
import { Column, Entity, PrimaryColumn } from 'typeorm';

@ObjectType()
@Entity({ name: 'books' })
export class Book {
  @PrimaryColumn()
  @Field(() => String, { description: 'Identifier for the Book' })
  id: string;

  @Column('string')
  @Field(() => String, { description: 'Name of the book' })
  name: string;

  @Field(() => Author, { description: 'Author of the book' })
  author: Author;

  @Column('string')
  authorId: string;
}
