import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ITask } from 'src/app/__shared__/model/task';

@Component({
  selector: 'task-detail',
  templateUrl: './task-detail.component.html',
  styleUrls: ['./task-detail.component.css']
})
export class TaskDetailComponent implements OnInit {
  pageTitle = 'Task Detail';
  task = {} as ITask;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.task = this.route.snapshot.data['task'];
    if (!this.task.id) {
      this.pageTitle = 'Add Task';
    } else {
      this.pageTitle = `Edit Task: ${this.task.title}`;
    }
  }
}
