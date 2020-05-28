import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from 'src/app/modules/users/services/user-service/user-service';
import { ITask } from 'src/app/__shared__/model/task';
import { IUser } from 'src/app/__shared__/model/user';

@Component({
  selector: 'task-edit-info',
  templateUrl: './task-edit-info.component.html',
  styleUrls: ['./task-edit-info.component.css']
})
export class TaskEditInfoComponent implements OnInit {

  @ViewChild(NgForm)
  taskForm: NgForm;

  @Input()
  task: ITask;

  assigneeUsers: IUser[];

  constructor(
    private userService: UserService
  ) { }


  ngOnInit() {
    this.loadForm();
    this.loadUsers();
  }

  loadForm() {
    this.taskForm && this.taskForm.reset();
  }

  loadUsers() {
    this.userService
      .findUsers()
      .subscribe((users: IUser[]) => {
        this.assigneeUsers = users;
      });
  }
}
