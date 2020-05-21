import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'tr[app-list-row]',
  templateUrl: './list-row.component.html',
  styleUrls: ['./list-row.component.css'],

})
export class ListRowComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

  @Input() name;
  @Input() category;
  @Input() dateStart;
  @Input() dateEnd;
  @Input() status;

  @Output() deleteTaskEmitter = new EventEmitter<string>();

  deleteTask() {
    this.deleteTaskEmitter.emit(this.name);
  }

  checkOverdued(status: string) {
    if (status === 'Просрочено') {
      return "color";
    }
  }

}
