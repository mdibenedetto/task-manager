import { Component, Input, OnInit } from '@angular/core';
import { Task } from '../../models/models';
import { TaskService } from '../task-service/task.service';
import { FormsModule } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'task-edit',
  templateUrl: './task-edit.component.html',
  styleUrls: ['./task-edit.component.css']
})
export class TaskFormComponent implements OnInit {
  pageTitle: string = 'Task Edit';
  task: Task;

  constructor(private taskService: TaskService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.data.subscribe(data => {
      this.onTaskRetrieved(data['task']);
    });
  }

  onTaskRetrieved(task: Task) {
    this.task = this.route.snapshot.data['task'];
    if (this.task._id === 0) {
      this.pageTitle = 'Add Task';
    } else {
      this.pageTitle = `Edit Task: ${this.task.title}`;
    }
  }

  save() {
    let subscriber$: Observable<any> = null;
    if (this.task._id === 0) {
      subscriber$ = this.taskService.addTask(this.task);
    } else {
      subscriber$ = this.taskService.updateTask(this.task);
    }
    subscriber$.subscribe(
      data => {
        console.log(data);
        this.router.navigate(['tasks']);
      }
    );
  }

  delete() {
    if (confirm(`Really delete the task: ${this.task.title}?`)) {
      this.taskService.removeTask(this.task._id).subscribe(data => {
        console.log(data)
        this.router.navigate(['tasks']);
      });
    }
  }
  isValid(path: string): boolean {
    return false;
  }
  validate(): void {

  }
}
