import { Component, Input, OnInit } from '@angular/core';
import { Task } from '../../models/models';
import { TaskService } from '../../services/task.service';
import { FormsModule } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'task-form',

  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent implements OnInit {
  @Input() task = new Task();
  editing = false;
  id = -1;

  constructor(private taskService: TaskService,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    // subscribe to router event
    // var paramId = this.activatedRoute.snapshot.params['id'];
     this.activatedRoute.params.subscribe((params: Params) => {
      this.editing = (+params['id']) != 0;
      this.taskService.findTask(params['id']).subscribe(task =>
        this.task = task || new Task());
    });
  }

  submitTask() {
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
}
