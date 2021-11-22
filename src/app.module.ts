import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TodosModule } from './todos/todos.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    GraphQLModule.forRoot({
      autoSchemaFile: true,
    }),
    UsersModule,
    TodosModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
