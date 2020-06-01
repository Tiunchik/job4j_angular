import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Task } from '../task.model';

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.css']
})
export class EditTaskComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

  @Output() editTaskEmmiter = new EventEmitter<Task>();

  @Input() task: Task;

  change() {
    this.editTaskEmmiter.emit(new Task(
      // @ts-ignore
      document.getElementById("name").value,
      // @ts-ignore
      document.getElementById("category").value,
      // @ts-ignore
      document.getElementById("dateStart").value,
      // @ts-ignore
      document.getElementById("dateEnd").value,
      // @ts-ignore
      document.getElementById("status").value
    ));
  }

  cansel() {
    this.editTaskEmmiter.emit(new Task('nothing'));
  }

}
