import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ITask } from 'src/app/__shared__/model/task';
import { MessageService } from 'src/app/__shared__/modules/messages/message-service/message.service';
import { TaskService } from '../../services/task-service/task.service';

export { TaskEditInfoComponent, TaskEditTagsComponent } from './components';

@Component({
  selector: 'task-edit',
  templateUrl: './task-edit.component.html',
  styleUrls: ['./task-edit.component.css']
})
export class TaskEditComponent implements OnInit {
  pageTitle = 'Task Edit';
  errorMessage = '';

  currentTab: 'info' | 'tags' = 'info';

  private dataIsValid: {
    [key: string]: boolean
  } | null = {};

  private currentTask?: ITask | null;
  private originalTask?: ITask | null;

  get task(): ITask {
    return this.currentTask as ITask;
  }

  set task(value: ITask) {
    this.currentTask = value;
    this.originalTask = Object.assign({}, value);
  }

  constructor(
    private taskService: TaskService,
    private messageService: MessageService,
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit() {
    this.route.data.subscribe(() => {
      // todo - check if param "data" is still needed
      //(data) => this.onTaskRetrieved(data.task);
      this.onTaskRetrieved();
    });
  }

  get isDirty(): boolean {
    return JSON.stringify(this.originalTask) !== JSON.stringify(this.currentTask);
  }

  isValid(path?: string): boolean {
    this.validate();

    if (path && this.dataIsValid) {
      return this.dataIsValid[path];
    }

    const data = this.dataIsValid || {}

    return Object.keys(data).every(d => data[d] === true);
  }

  onTaskRetrieved() {
    this.task = this.route.snapshot.data['task'];

    if (this.task.id === 0) {
      this.pageTitle = 'Add Task';
    } else {
      this.pageTitle = `Edit Task: ${this.task.title}`;
    }
  }

  reset(): void {
    this.dataIsValid = null;
    this.currentTask = null;
    this.originalTask = null;
  }

  save(): void {
    if (this.isValid()) {
      this.taskService.saveTask(this.task)
        .subscribe({
          next: () => this.onSaveComplete(`${this.task.title} was saved`),
          error: (error: any) => this.errorMessage = (error as string)
        });
    } else {
      this.errorMessage = 'Please correct the validation errors.';
    }
  }

  delete(): void {
    if (this.task.id === 0) {
      // Don't delete, it was never saved.
      this.onSaveComplete();
    } else {
      if (confirm(`Really delete the task: ${this.task.title}?`)) {
        this.taskService.removeTask(this.task.id)
          .subscribe(
            {
              next: () => this.onSaveComplete(`${this.task.title} was deleted`),
              error: (error: any) => this.errorMessage = (error as string)
            }
          );
      }
    }
  }

  onSaveComplete(message?: string): void {
    if (message) {
      this.messageService.addMessage(message);
    }
    this.reset();
    this.router.navigate(['/tasks']);
  }

  validate(): void {
    this.dataIsValid = {
      info: this.task.title ? (this.task.title !== '' && !this.task.title.startsWith(' ')) : false
    };

    // this.dataIsValid['tags'] = this.task.categoryId && this.task.categoryId > 0;
  }
}
