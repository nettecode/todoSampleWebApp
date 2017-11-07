import { Component, OnInit } from '@angular/core';

import {Todo} from './shared/todo.model';
import {TodoService} from './shared/todo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [TodoService]
})
export class AppComponent implements OnInit {
  title = 'Todo sample app';

  constructor(private todoService: TodoService) {}
  lists = {
    todo: {
      name: 'To do',
      tasks: this.todoService.getTodos()
    },
    done: {
      name: 'Done',
      tasks: this.todoService.getDoneTasks()
    }
  }

    ngOnInit() {
    this.todoService.todoChanged.subscribe(
      () => {
        this.lists.todo.tasks = this.todoService.getTodos();
        this.lists.done.tasks = this.todoService.getDoneTasks();
      }
    );
  }

}
