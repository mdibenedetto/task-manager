import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { TaskService } from 'src/app/modules/tasks/services/task-service/task.service';
import { ITask, ITaskType } from 'src/app/__shared__/model/task';

@Component({
  selector: 'task-edit-tags',
  templateUrl: './task-edit-tags.component.html',
  styleUrls: ['./task-edit-tags.component.css']
})
export class TaskEditTagsComponent implements OnInit {
  @ViewChild(NgForm)
  taskForm: NgForm;

  @Input()
  task: ITask;

  categories: ITaskType[];

  constructor(private taskService: TaskService) {
  }

  ngOnInit(): void {
    this.taskService
      .findTaskTypes()
      .subscribe(categories => this.categories = categories);
  }

}
