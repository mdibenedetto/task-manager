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
  @Input() task = new Task();
  editing = false;
  id = -1;

  constructor(private taskService: TaskService,
    private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    // subscribe to router event
    // var paramId = this.activatedRoute.snapshot.params['id'];
    this.activatedRoute.params.subscribe((params: Params) => {
      this.editing = (+params['id']) != 0;

      this.taskService.findTask(params['id']).subscribe(task => {
        this.task = task || new Task();

        if (this.task._id === 0) {
          this.pageTitle = 'Add Task';
        } else {
          this.pageTitle = `Edit Task: ${this.task.title}`;
        }
      });
    });
  }

  save() {
    if (!this.editing) {
      this.taskService.addTask(this.task)
        .subscribe(data => {
          console.log(data)
        });
    } else {
      this.taskService.updateTask(this.task)
        .subscribe(data => {
          console.log(data)
        });
    }
  }

  delete() {
    if (confirm(`Really delete the product: ${this.task.title}?`)) {
      this.taskService.removeTask(this.task._id).subscribe(data => {
        console.log(data)
      });
    }

  }
}
