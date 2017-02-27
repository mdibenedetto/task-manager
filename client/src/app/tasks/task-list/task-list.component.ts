import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../services/task.service';
import { Task } from '../../models/models';
import { Observable } from 'rxjs'
@Component({
  selector: 'task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  tasks: Task[];
  selectedRow: number = -1;
  constructor(private taskService: TaskService) {}

  ngOnInit() {
    this.loadTask();
  }

  loadTask() {
    this.taskService.getTasks()
      .subscribe(
        tasks => {
          this.tasks = tasks;
        },
        error => {
          console.error(error)
        });
  }

  setSelectedRow(index) {
    this.selectedRow = (index === this.selectedRow) ? -1 : index;
  }
}
