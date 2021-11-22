import { ArgsType, Field } from '@nestjs/graphql';
import { IsNotEmpty } from 'class-validator';

@ArgsType()
export class GetTodoArgs {
  @Field()
  @IsNotEmpty()
  id: string;
}
