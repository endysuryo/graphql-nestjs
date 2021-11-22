import { Field, InputType } from '@nestjs/graphql';
import { IsNotEmpty, IsOptional } from 'class-validator';

@InputType()
export class UpdateTodoInput {
  @Field()
  @IsNotEmpty()
  id: string;

  @Field({ nullable: true })
  @IsOptional()
  @IsNotEmpty()
  title: string;

  @Field()
  @IsOptional()
  @IsNotEmpty()
  description: string;

  @Field()
  @IsOptional()
  isDone: boolean;
}
