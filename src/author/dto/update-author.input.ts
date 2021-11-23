import { Field, InputType, Int, PartialType } from '@nestjs/graphql';

import { CreateAuthorInput } from './create-author.input';

@InputType()
export class UpdateAuthorInput extends PartialType(CreateAuthorInput) {
  @Field(() => Int)
  id: number;
  @Field(() => String)
  name: string;
}
