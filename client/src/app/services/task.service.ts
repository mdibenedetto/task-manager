import {
  Injectable
} from '@angular/core';
import {
  Subject,
  Observable
} from 'rxjs';
import {
  Task
} from '../models/models'

@Injectable() export class TaskService {
  task: Subject <Task> = new Subject <Task> ();
  tasks: Task[]=new Array<Task>() ;

  create(title: string) {
    let task = new Task();
    task.title = title;
    this
      .task
      .next(task);

    console.log(`new task ${this.task}`)
    return task;
  }
  constructor() {

    this.task.subscribe((t) => {
          this.tasks.push(t);
      });

  }
}
