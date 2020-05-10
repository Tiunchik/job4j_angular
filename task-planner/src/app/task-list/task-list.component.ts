import { Component, OnInit } from '@angular/core';

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

  addTask() {
    console.log('Task was added');
  }

  filterTasks($event) {
    if ($event.target.checked ) {
      console.log('true');
    } else {
      console.log('false');
    }
  }

}
