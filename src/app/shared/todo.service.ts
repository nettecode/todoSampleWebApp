import { EventEmitter } from '@angular/core';

import { Todo } from './todo.model';

export class TodoService {
  todoChanged = new EventEmitter<Todo[]>();

  private tasks: Todo[] = [
        new Todo('Todo #11'),
        new Todo('Todo #12'),
        new Todo('Todo #13'),
        new Todo('Todo #14'),
        new Todo('Todo #15', true),
        new Todo('Todo #16', true)
  ];

  getTasks() {
    return this.tasks;
  }

  getTodos() {
    return this.tasks.filter(task => !task.done);
  }

  getDoneTasks() {
    return this.tasks.filter(task => task.done);
  }
}
