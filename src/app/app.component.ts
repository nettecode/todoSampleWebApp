import { Component } from '@angular/core';

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
        'Todo #1',
        'Todo #2',
        'Todo #3',
        'Todo #4'
      ]
    }
  }

}
