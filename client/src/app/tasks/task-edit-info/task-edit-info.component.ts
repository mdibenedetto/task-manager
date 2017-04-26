import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Task } from '../../models/models';
@Component({
  selector: 'task-edit-info',
  templateUrl: './task-edit-info.component.html',
  styleUrls: ['./task-edit-info.component.css']
})
export class TaskEditInfoComponent implements OnInit {
  @ViewChild(NgForm) taskForm: NgForm;
  task: Task;
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
