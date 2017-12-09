import { Component, OnInit, ViewChild } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { NgForm } from "@angular/forms";
import { ITask, ITaskType } from "../task";

@Component({
  selector: "task-edit-tags",
  templateUrl: "./task-edit-tags.component.html",
  styleUrls: ["./task-edit-tags.component.css"]
})
export class TaskEditTagsComponent implements OnInit {
  @ViewChild(NgForm) taskForm: NgForm;
  task: ITask;
  categories: ITaskType[] = [
    { id: 1, description: "Bug" },
    { id: 2, description: "Epic" },
    { id: 3, description: "Story" },
    { id: 4, description: "Improvement" }
  ];

  constructor(private route: ActivatedRoute) {}

  formValuesChage(e) {
    console.warn(e);
    console.warn(this.taskForm.invalid);
  }
  ngOnInit() {
    this.route.parent.data.subscribe(data => {
      this.task = data["task"];
      this.taskForm && this.taskForm.reset();

      console.log(this.task)
    });
  }
}
