import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import { TaskService } from '../services/task.service';
import { TaskListToolbarComponent } from './task-list-toolbar/task-list-toolbar.component';
import { TaskFormComponent } from './task-form/task-form.component';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskListItemComponent } from './task-list-item/task-list-item.component';
 
@NgModule({
  imports: [
    RouterModule,
    FormsModule,
    CommonModule,
    RouterModule.forChild([
      {
        path: 'tasks',
        component: TaskListComponent
      },
      {
        path: 'task',
        component: TaskFormComponent
      },
      {
        path: 'task/:id',
        component: TaskFormComponent
      },
    ])
  ],
  declarations: [
    TaskListToolbarComponent,
    TaskFormComponent,
    TaskListComponent,
    TaskListItemComponent,],
  providers: [TaskService]
})
export class TasksModule { }
