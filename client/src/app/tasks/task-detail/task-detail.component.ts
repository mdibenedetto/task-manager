import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Task } from '../../models/models';
import { TaskService } from '../task-service/task.service'
@Component({
  selector: 'task-detail',
  templateUrl: './task-detail.component.html',
  styleUrls: ['./task-detail.component.css']
})
export class TaskDetailComponent implements OnInit {
  pageTitle: string = 'Task Detail';
  task: Task = new Task();

  constructor(
    private route: ActivatedRoute,
    private taskService: TaskService) {}
  ngOnInit(): void {
    // this.task = this.route.snapshot.data['task'];
    // var paramId = this.activatedRoute.snapshot.params['id'];
    this.route.params.subscribe((params: Params) => {
      this.taskService.findTask(params['id']).subscribe(task => {
        this.task = task || new Task(); 
      });
    });
  }
}
