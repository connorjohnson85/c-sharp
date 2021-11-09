import { Component, OnInit, Input } from '@angular/core';
import { Todo } from '@to-do/data';

@Component({
  selector: 'to-do-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
})
export class TodosComponent implements OnInit {
  @Input() todos: Todo[] = [];

  constructor() {}

  ngOnInit() {}
}