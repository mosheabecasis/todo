import { Component,OnInit } from '@angular/core';
import {TodoItem} from "./todo-item";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  {

  todoList: TodoItem[] = [];

  constructor() {
    this.todoList = localStorage.getItem('items') ? [...JSON.parse(localStorage.getItem('items'))] : [];
  }

  addNewTask(event) {
    this.todoList.push({
      title: event,
      id: Math.random().toString(36).substr(2, 9),
      done: false
    });
    this.saveToLocalStorage();
  }

  deleteItem(itemId) {
    this.todoList = this.todoList.filter((item: TodoItem) => item.id !== itemId);
    this.saveToLocalStorage();
  }

  saveToLocalStorage() {
    localStorage.setItem('items', JSON.stringify(this.todoList));
  }

}
