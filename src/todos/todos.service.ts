import { Injectable } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';
import { GetTodoArgs } from './dto/args/get-todo.args';
import { CreateTodoInput } from './dto/input/create-todo.input';
import { DeleteTodoInput } from './dto/input/delete-todo.input';
import { UpdateTodoInput } from './dto/input/update-todo.input';
import { Todo } from './models/todo';

@Injectable()
export class TodosService {
  private todos: Todo[] = [];

  public createTodo(createTodoData: CreateTodoInput): Todo {
    const todo: Todo = {
      id: uuidv4(),
      ...createTodoData,
    };

    this.todos.push(todo);

    return todo;
  }

  public updateTodo(updateTodoData: UpdateTodoInput): Todo {
    const todo = this.todos.find(todo => todo.id === updateTodoData.id);

    Object.assign(todo, updateTodoData);

    return todo;
  }

  public getTodo(getTodoArgs: GetTodoArgs): Todo {
    return this.todos.find(todo => todo.id === getTodoArgs.id);
  }

  public getTodos(): Todo[] {
    return this.todos;
  }

  public deleteTodo(deleteTodoData: DeleteTodoInput): Todo {
    const todoIndex = this.todos.findIndex(
      todo => todo.id === deleteTodoData.id,
    );

    const todo = this.todos[todoIndex];

    this.todos.splice(todoIndex, 1);

    return todo;
  }
}
