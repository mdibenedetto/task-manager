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
  selectedId: number = -1;
  constructor(private taskService: TaskService) {}

  ngOnInit() {
    this.searchTasks();
  }

  searchTasks() { 
    this.taskService.getTasks()
      .subscribe(
        tasks => {
          this.tasks = tasks;
        },
        error => {
          console.error(`Error Server: ${error}`);
        });
  }
  
  removeTask(id) {
    this.taskService.removeTask(this.selectedId).subscribe(
      x => {
        this.searchTasks();
      },
      err => {
        console.log(err);
      });
  }
  setSelectedRow(index) {
    this.selectedId = this.tasks[index]._id;
    this.selectedRow = (index === this.selectedRow) ? -1 : index;
  }
}
