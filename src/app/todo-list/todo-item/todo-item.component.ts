import { Component, OnInit, Input } from '@angular/core';

import { TodoService } from '../../shared/todo.service';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit {
  @Input() task: any;

  constructor(private todoService: TodoService) { }

  ngOnInit() {
  }

  onStatusChange() {
    this.task.done = !this.task.done;
    this.todoService.todoChanged.emit();
  }
}
