import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { Task } from '../models/models';
import * as rx from 'rxjs';

@Injectable() export class TaskService {
  task: Subject < Task > = new Subject < Task > ();
  tasks: Task[] = new Array < Task > ();

  create(title: string) {
    let task = new Task();
    task.title = title;
    this.task.next(task);

    console.log(`new task ${JSON.stringify(this.task)}`)
    return task;
  }
  constructor() {
    this.task.subscribe((t) => {
      this.tasks.push(t);
    });
  }
}
