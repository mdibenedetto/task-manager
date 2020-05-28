import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';

import { ITask } from '../../../../../../__shared__/model/task';
import { IUser } from '../../../../../../__shared__/model/user';
import { UserService } from 'src/app/modules/users/services/user-service/user-service';
@Component({
  selector: 'task-edit-info',
  templateUrl: './task-edit-info.component.html',
  styleUrls: ['./task-edit-info.component.css']
})
export class TaskEditInfoComponent implements OnInit {

  @ViewChild(NgForm)
  taskForm: NgForm;
  task: ITask;
  assigneeUsers: IUser[];

  constructor(
    private route: ActivatedRoute,
    private userService: UserService
  ) { }

  formValuesChage(e) {
    console.warn(e);
    console.warn(this.taskForm.invalid);
  }
  ngOnInit() {
    this.loadForm();
    this.loadUsers();
  }

  loadForm() {
    this.route.parent.data.subscribe(data => {
      this.task = data.task;
      this.taskForm && this.taskForm.reset();
    });
  }

  loadUsers() {
    this.userService
      .findUsers()
      .subscribe((users: IUser[]) => {
        this.assigneeUsers = users;
      })
  }
}
