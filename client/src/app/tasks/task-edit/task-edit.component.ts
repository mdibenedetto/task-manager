import { Component, Input, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs';
import { ITask } from '../task';
import { TaskService } from '../task-service/task.service';
import { MessageService } from '../../messages/message-service/message.service';

@Component({
  selector: 'task-edit',
  templateUrl: './task-edit.component.html',
  styleUrls: ['./task-edit.component.css']
})
export class TaskEditComponent implements OnInit {
  pageTitle: string = 'Task Edit';

  private dataIsValid: { [key: string]: boolean } = {};
  private currentTask: ITask;
  private originalTask: ITask;

  get task(): ITask {
    return this.currentTask;
  }
  set task(value: ITask) {
    this.currentTask = value;
    this.originalTask = Object.assign({}, value);
  }
  constructor(private taskService: TaskService,
    private messageService: MessageService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.route.data.subscribe(data => {
      this.onTaskRetrieved(data['task']);
    });
  }

  get isDirty(): boolean {
    return JSON.stringify(this.originalTask) !== JSON.stringify(this.currentTask);
  }

  isValid(path: string): boolean {
    this.validate();
    if (path) {
      return this.dataIsValid[path];
    }
    return (this.dataIsValid &&
      Object.keys(this.dataIsValid).every(d => this.dataIsValid[d] === true));
  }

  onTaskRetrieved(task: ITask) {
    this.task = this.route.snapshot.data['task'];
    if (this.task._id === 0) {
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


  // saveProduct(): void {
  //   if (this.isValid(null)) {
  //     this.productService.saveProduct(this.product)
  //       .subscribe(
  //       () => this.onSaveComplete(`${this.product.productName} was saved`),
  //       (error: any) => this.errorMessage = <any>error
  //       );
  //   } else {
  //     this.errorMessage = 'Please correct the validation errors.';
  //   }
  // }


  save() {
    let subscriber$: Observable<any> = null;
    if (this.task._id === 0) {
      subscriber$ = this.taskService.addTask(this.task);
    } else {
      subscriber$ = this.taskService.updateTask(this.task);
    }

    this.router.navigate(['tasks']);
    // subscriber$.subscribe(
    //   data => {
    //     console.log(data);
    //     this.router.navigate(['tasks']);
    //   }
    // );
  }

  delete() {
    if (confirm(`Really delete the task: ${this.task.title}?`)) {
      this.taskService.removeTask(this.task._id).subscribe(data => {
        console.log(data)
        this.router.navigate(['tasks']);
      });
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
    this.dataIsValid = {};
    this.dataIsValid['info'] = this.task.title && (this.task.title !== '' && !this.task.title.startsWith(' '));
    this.dataIsValid['tags'] = this.task.category && this.task.category !== '';
  }
}



// deleteProduct(): void {
// if (this.product.id === 0) {
//     // Don't delete, it was never saved.
//     this.onSaveComplete();
// } else {
//     if (confirm(`Really delete the product: ${this.product.productName}?`)) {
//         this.productService.deleteProduct(this.product.id)
//             .subscribe(
//                 () => this.onSaveComplete(`${this.product.productName} was deleted`),
//                 (error: any) => this.errorMessage = <any>error
//             );
//     }
// }
// }

    // saveProduct(): void {
    //     if (true === true) {
    //         this.productService.saveProduct(this.product)
    //             .subscribe(
    //                 () => this.onSaveComplete(`${this.product.productName} was saved`),
    //                 (error: any) => this.errorMessage = <any>error
    //             );
    //     } else {
    //         this.errorMessage = 'Please correct the validation errors.';
    //     }
    // }

    // onSaveComplete(message?: string): void {
    //     if (message) {
    //         this.messageService.addMessage(message);
    //     }

    //     // Navigate back to the product list
    // }