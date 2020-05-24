import { Component, OnInit, Input } from '@angular/core';
import { ITask } from '../../../../task';

@Component({
  selector: 'task-list-item',
  templateUrl: './task-list-item.component.html',
  styleUrls: ['./task-list-item.component.css']
})
export class TaskListItemComponent implements OnInit {
  @Input() task: ITask;
  constructor() { }
  ngOnInit() { }
}
