import { Component, OnInit } from '@angular/core';
import { Task } from '../../models/models';
import { TaskService } from '../../services/task.service';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  task: Task;
  constructor(private taskService: TaskService) { }

  ngOnInit() {
    this.task = new Task();
  }

  create() {
    this.taskService.create(this.task.title);
  }
}
