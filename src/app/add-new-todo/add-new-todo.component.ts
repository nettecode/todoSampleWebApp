import { Component, OnInit } from '@angular/core';

import { Todo } from '../shared/todo.model';
import { TodoService } from '../shared/todo.service';


@Component({
  selector: 'app-add-new-todo',
  templateUrl: './add-new-todo.component.html',
  styleUrls: ['./add-new-todo.component.css']
})
export class AddNewTodoComponent implements OnInit {

  constructor(private todoService: TodoService) { }

  ngOnInit() {
  }

  addTodo(taskName) {
    this.todoService.addTodo(new Todo(taskName));
  }
}
