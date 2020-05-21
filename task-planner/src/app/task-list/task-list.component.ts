import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { filter } from 'rxjs/operators';

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


  tasks = [
    {
      name: 'Название 1',
      category: 'Категория 1',
      dateStart: 'Сегодня',
      dateEnd: 'Завтра',
      status: 'Не выполнено'
    },
    {
      name: 'Название 2',
      category: 'Категория 2',
      dateStart: 'Сегодня',
      dateEnd: 'Завтра',
      status: 'Не выполнено'
    },
    {
      name: 'Название 3',
      category: 'Категория 3',
      dateStart: 'Сегодня',
      dateEnd: 'Завтра',
      status: 'Выполнено'
    },
    {
      name: 'Название 4',
      category: 'Категория 4',
      dateStart: 'Сегодня',
      dateEnd: 'Завтра',
      status: 'Просрочено'
    }
  ]

  addTask() {
    console.log('Task was added');
  }

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
    return this.tasks.filter(tasks => tasks.status === status).length;
  }

  hideBychecker(status: string) {
    var check = document.getElementById('box');
    // @ts-ignore
    if (check.checked && status === 'Выполнено') {
      return false;
    }
    return true;
  }
}
