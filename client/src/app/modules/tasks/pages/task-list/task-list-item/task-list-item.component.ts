import { Component, Input } from '@angular/core';
import { ITask } from '../../../../../__shared__/model/task';

@Component({
  selector: 'task-list-item',
  templateUrl: './task-list-item.component.html',
  styleUrls: ['./task-list-item.component.css']
})
export class TaskListItemComponent {
  @Input() task: ITask;
}
