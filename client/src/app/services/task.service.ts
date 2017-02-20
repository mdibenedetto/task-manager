import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { Task } from '../models/models';
import * as rx from 'rxjs';

@Injectable() export class TaskService {
  task: Subject<Task> = new Subject<Task>();
  tasks: Task[] = new Array<Task>();

  create(title: string) {
    let task = new Task();
    task.title = title;
    this.task.next(task);

    console.log(`new task ${JSON.stringify(this.task)}`)
    return task;
  }
  constructor() {
    for (let i = 0; i < 20; i++) {
      var task = new Task();
      task["description"] = "this is a test " + i;
      task["title"] = "Task-" + i;
      task["assigneId"] = 0;
      task["startDate"] = new Date();
      task["endDate"] = null;

      this.tasks.push(task);
    }

    this.task.subscribe((t) => {
      this.tasks.push(t);
    });
  }
}
