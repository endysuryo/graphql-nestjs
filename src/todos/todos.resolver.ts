import { Resolver, Query, Args, Mutation } from '@nestjs/graphql';
import { GetTodoArgs } from './dto/args/get-todo.args';
// import { GetTodosArgs } from './dto/args/get-todos.args';
import { CreateTodoInput } from './dto/input/create-todo.input';
import { DeleteTodoInput } from './dto/input/delete-todo.input';
import { UpdateTodoInput } from './dto/input/update-todo.input';

import { Todo } from './models/todo';
import { TodosService } from './todos.service';

@Resolver(() => Todo)
export class TodosResolver {
  constructor(private readonly todosService: TodosService) {}

  @Query(() => Todo, { name: 'Todo', nullable: true })
  getTodo(@Args() getTodoArgs: GetTodoArgs): Todo {
    return this.todosService.getTodo(getTodoArgs);
  }

  @Query(() => [Todo], { name: 'Todos', nullable: 'items' })
  getTodos(): Todo[] {
    return this.todosService.getTodos();
  }

  @Mutation(() => Todo)
  createTodo(@Args('createTodoData') createTodoData: CreateTodoInput): Todo {
    return this.todosService.createTodo(createTodoData);
  }

  @Mutation(() => Todo)
  updateTodo(@Args('updateTodoData') updateTodoData: UpdateTodoInput): Todo {
    console.info('updateTodoData: ', updateTodoData);
    return this.todosService.updateTodo(updateTodoData);
  }

  @Mutation(() => Todo)
  deleteTodo(@Args('deleteTodoData') deleteTodoData: DeleteTodoInput): Todo {
    return this.todosService.deleteTodo(deleteTodoData);
  }
}
