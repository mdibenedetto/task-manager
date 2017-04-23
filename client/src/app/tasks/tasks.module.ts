import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import { TaskService } from './task-service/task.service';
import { TaskListToolbarComponent } from './task-list-toolbar/task-list-toolbar.component';
import { TaskFormComponent } from './task-edit/task-edit.component';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskListItemComponent } from './task-list-item/task-list-item.component';
import { TaskFilterPipe } from './task-filter/task-filter.pipe';
import { TaskDetailComponent } from './task-detail/task-detail.component';
 
@NgModule({
  imports: [
    RouterModule,
    FormsModule,
    CommonModule,
    RouterModule.forChild([
      {
        path: 'tasks',
        component: TaskListComponent
      }, {
        path: 'tasks/:id',
        component: TaskDetailComponent
      },     
      {
        path: 'tasks/:id/edit',
        component: TaskFormComponent
      },
    ])
  ],
  declarations: [
    TaskListToolbarComponent,
    TaskFormComponent,
    TaskListComponent,
    TaskListItemComponent,
    TaskFormComponent,
    TaskFilterPipe,
    TaskDetailComponent,],
  providers: [TaskService]
})
export class TasksModule { }
