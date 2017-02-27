import { Component, Input, OnInit } from '@angular/core';
import { Task } from '../../models/models';
import { TaskService } from '../../services/task.service';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent implements OnInit {
  @Input() task = new Task();
  editing = false;

  constructor(private taskService: TaskService) {}

  ngOnInit() {

  }

  submitTask() {
    if (!this.editing) {
      this.taskService.addTask(this.task)
      .subscribe(data => {
        console.log(data)
      });
    } else {}
  }
}
