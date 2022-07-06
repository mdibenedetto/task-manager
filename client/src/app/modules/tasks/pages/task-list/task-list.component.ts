import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ITask } from 'src/app/__shared__/model/task';
import { TaskService } from '../../services/task-service/task.service';

@Component({
  selector: 'task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  tasks = [] as ITask[];
  selectedRow = -1;
  selectedId = -1;
  listFilter = '';

  constructor(
    private taskService: TaskService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.searchTasks();
  }

  searchTasks(): void {
    this.taskService.getTasks().subscribe(
      tasks => {
        this.tasks = tasks;
        this.listFilter = this.route.snapshot.queryParams['filterBy'] || '';
      }
    );
  }

  removeTask(id: string | number): void {
    this.taskService.removeTask(id)
      .subscribe(_ => this.searchTasks);
  }

  setSelectedRow(index: number): void {
    this.selectedId = this.tasks[index].id;
    this.selectedRow = index === this.selectedRow ? -1 : index;
  }
}
