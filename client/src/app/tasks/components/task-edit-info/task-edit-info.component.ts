import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms'; 

import { ITask } from '../../task';
import { IUser } from '../../../user/user';
@Component({
  selector: 'task-edit-info',
  templateUrl: './task-edit-info.component.html',
  styleUrls: ['./task-edit-info.component.css']
})
export class TaskEditInfoComponent implements OnInit {
  @ViewChild(NgForm) taskForm: NgForm;
  task: ITask;
  assigneeUsers: IUser[] = [ 
    {
      userName: "michele@taskmanager.tax", fullName: "Michele Tester",
      passWord: "", id: 1, isAdmin: true
    }, 
    {
      userName: "miguel@taskmanager.tax", fullName: "Miguel Tester",
      passWord: "", id: 2, isAdmin: false
    },
    {
      userName: "patrick@taskmanager.tax", fullName: "Patrick Tester",
      passWord: "", id: 3, isAdmin: false
    },
    {
      userName: "aitor@taskmanager.tax", fullName: "Aitor Tester",
      passWord: "", id: 4, isAdmin: false
    },
    {
      userName: "gerard@taskmanager.tax", fullName: "Gerard Tester",
      passWord: "", id: 5, isAdmin: false
    },
  ];
  
  constructor(private route: ActivatedRoute) {}

  formValuesChage(e) {
    console.warn(e);
    console.warn(this.taskForm.invalid);    
  }
  ngOnInit() {
    this.route.parent.data.subscribe(data => {
      this.task = data['task'];
      this.taskForm && this.taskForm.reset();
    });
  }
}
