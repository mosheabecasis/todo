import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {TodoItem} from "../../todo-item";

@Component({
  selector: 'todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent {

  @Input() itemToDisplay: TodoItem[];
  @Output() deleteThisItem$ = new EventEmitter(null);

  deleteItem($event) {
      this.deleteThisItem$.emit($event);

}
}
