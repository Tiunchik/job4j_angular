import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-statistic',
  templateUrl: './statistic.component.html',
  styleUrls: ['./statistic.component.css']
})
export class StatisticComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

  @Input() taskAll;
  @Input() tasksPlanned;
  @Input() tasksOverdue;
  @Input() tasksFinished;

}
