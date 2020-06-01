import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Task } from '../task.model';

@Component({
  selector: 'app-task-add',
  templateUrl: './task-add.component.html',
  styleUrls: ['./task-add.component.css']
})
export class TaskAddComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

  @Output() addTaskEmitter = new EventEmitter<Task>();

  private temp: number = 5;

  addTask() {
    this.temp++;
    this.addTaskEmitter.emit(new Task('Название' + this.temp, 'Категория' + this.temp, 'Сегодня', 'Завтра', 'Не выполнено'));
  }

}
