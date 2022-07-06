import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from 'src/app/modules/users';
import { ITask, IUser } from 'src/app/__shared__/model';

@Component({
  selector: 'task-edit-info',
  templateUrl: './task-edit-info.component.html',
  styleUrls: ['./task-edit-info.component.css']
})
export class TaskEditInfoComponent implements OnInit {

  @ViewChild(NgForm)
  taskForm?: NgForm;

  @Input()
  task = {} as ITask;

  assigneeUsers = [] as IUser[];

  constructor(
    private userService: UserService
  ) { }


  ngOnInit(): void {
    this.loadForm();
    this.loadUsers();
  }

  loadForm(): void {
    this.taskForm?.reset();
  }

  loadUsers(): void {
    this.userService
      .findUsers()
      .subscribe((users: IUser[]) => {
        this.assigneeUsers = users;
      });
  }
}
