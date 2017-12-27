import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { TaskService } from "../task-service/task.service";
import { ITask } from "../task";
import { Observable } from "rxjs";
@Component({
  selector: "task-list",
  templateUrl: "./task-list.component.html",
  styleUrls: ["./task-list.component.css"]
})
export class TaskListComponent implements OnInit {
  pageTitle: string = "Task List";
  tasks: ITask[];
  selectedRow: number = -1;
  selectedId: number = -1;
  listFilter: string = "";

  constructor(
    private taskService: TaskService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.searchTasks();
  }

  searchTasks() {
    this.taskService.getTasks().subscribe(
      tasks => {
        this.tasks = tasks;
        this.listFilter = this.route.snapshot.queryParams["filterBy"] || "";
      },
      error => {
        console.error(`Error Server: ${error}`);
      }
    );
  }

  removeTask(id) {
    this.taskService.removeTask(id).subscribe(
      data => {
        console.log(data);
        this.searchTasks();
      },
      err => {
        console.log(err);
      }
    );
  }
  setSelectedRow(index) {
    this.selectedId = this.tasks[index].id;
    this.selectedRow = index === this.selectedRow ? -1 : index;
  }
}
