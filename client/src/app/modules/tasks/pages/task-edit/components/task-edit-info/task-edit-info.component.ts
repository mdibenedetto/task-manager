import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';

import { ITask } from '../../../../../../__shared__/model/task';
import { IUser } from '../../../../../../__shared__/model/user';
import { UserService } from 'src/app/modules/user/services/user-service/user-service';
@Component({
  selector: 'task-edit-info',
  templateUrl: './task-edit-info.component.html',
  styleUrls: ['./task-edit-info.component.css']
})
export class TaskEditInfoComponent implements OnInit {

  @ViewChild(NgForm) taskForm: NgForm;
  task: ITask;
  assigneeUsers: IUser[];

  // assigneeUsers: IUser[] = [
  //   {
  //     userName: "tstark@taskmanager.tax", fullName: "To Tester",
  //     passWord: "", id: 1, isAdmin: true
  //   },
  //   {
  //     userName: "pparker@taskmanager.tax", fullName: "Miguel Tester",
  //     passWord: "", id: 2, isAdmin: false
  //   },
  //   {
  //     userName: "nfury@taskmanager.tax", fullName: "Patrick Tester",
  //     passWord: "", id: 3, isAdmin: false
  //   },
  //   {
  //     userName: "aitor@taskmanager.tax", fullName: "Aitor Tester",
  //     passWord: "", id: 4, isAdmin: false
  //   },
  //   {
  //     userName: "gerard@taskmanager.tax", fullName: "Gerard Tester",
  //     passWord: "", id: 5, isAdmin: false
  //   },
  // ];

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
      this.task = data['task'];
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
