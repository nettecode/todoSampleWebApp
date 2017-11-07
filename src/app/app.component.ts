import { Component } from '@angular/core';

import {Todo} from './shared/todo.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Todo sample app';
  lists = {
    todo: {
      name: 'To do',
      tasks: [
        new Todo('Todo #11'),
        new Todo('Todo #12'),
        new Todo('Todo #13'),
        new Todo('Todo #14')
      ]
    },
    done: {
      name: 'Done',
      tasks: [
        new Todo('Todo #15', true),
        new Todo('Todo #16', true)
      ]
    }
  }

}
