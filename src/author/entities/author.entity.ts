import { Field, ObjectType } from '@nestjs/graphql';
import { Column, Entity, ObjectIdColumn } from 'typeorm';

@Entity({ name: 'authors' })
@ObjectType()
export class Author {
  @ObjectIdColumn()
  @Field(() => String, { description: 'Identifier for the Author' })
  id: string;
  @Column('string')
  @Field(() => String, { description: 'Name of the author' })
  name: string;
}
