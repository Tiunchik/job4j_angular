import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { filter } from 'rxjs/operators';
import { Task } from './task.model';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

  editTask: Task;

  visible: boolean = false;

  tasks: Task[] = [
    new Task(
      'Название 1',
      'Категория 1',
      'Сегодня',
      'Завтра',
      'Не выполнено'
    ),
    new Task(
      'Название 2',
      'Категория 2',
      'Сегодня',
      'Завтра',
      'Не выполнено'
    ),
    new Task(
      'Название 3',
      'Категория 3',
      'Сегодня',
      'Завтра',
      'Выполнено'
    ),
    new Task(
      'Название 4',
      'Категория 4',
      'Сегодня',
      'Завтра',
      'Просрочено'
    )
  ]

  filterTasks($event) {
    if ($event.target.checked) {
      console.log('true');
    } else {
      console.log('false');
    }
  }

  getTaskListsSize() {
    return this.tasks.length;
  }

  deleteTaskFromArray(name: string) {
    var element = document.getElementById(name);
    element.parentNode.removeChild(element);
  }

  getTasksAmountByStatus(status: string) {
    return this.tasks.filter(task => task.status === status).length;
  }

  hideBychecker(status: string) {
    var check = document.getElementById('box');
    // @ts-ignore
    if (check.checked && status === 'Выполнено') {
      return false;
    }
    return true;
  }

  addRow(task: Task) {
    this.tasks.push(task);
  }

  passTask(task: Task) {
    this.editTask = task;
    this.visible = true;
  }

  changeTask(task: Task) {
    if (task.name === 'nothing') {
      this.visible = !this.visible;
      return;
    }
    for (let i = 0; i < this.tasks.length; i++) {
      if (this.tasks[i].name === this.editTask.name) {
        this.tasks[i] = task;
      }
    }
    this.visible = !this.visible;
  }

}
