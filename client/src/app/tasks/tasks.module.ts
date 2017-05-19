import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import { TaskService } from './task-service/task.service';
import { TaskFilterPipe } from './task-filter/task-filter.pipe';
import { TaskResolver } from './task-resolver/task-resolver.service';
import { TaskListToolbarComponent } from './task-list-toolbar/task-list-toolbar.component';
import { TaskFormComponent } from './task-edit/task-edit.component';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskListItemComponent } from './task-list-item/task-list-item.component';
import { TaskDetailComponent } from './task-detail/task-detail.component';
import { TaskEditInfoComponent } from './task-edit-info/task-edit-info.component';
import { TaskEditTagsComponent } from './task-edit-tags/task-edit-tags.component';

@NgModule({
  imports: [
    RouterModule,
    FormsModule,
    CommonModule,
    RouterModule.forChild([
      {
        path: 'tasks',
        children: [
          {
            path: '',
            component: TaskListComponent
          },
          {
            path: ':id',
            component: TaskDetailComponent,
            resolve: { task: TaskResolver }
          },
          {
            path: ':id/edit',
            component: TaskFormComponent,
            resolve: { task: TaskResolver },
            children: [{
              path: '',
              redirectTo: 'info',
              pathMatch: 'full'
            },
            {
              path: 'info',
              component: TaskEditInfoComponent
            },
            {
              path: 'tags',
              component: TaskEditTagsComponent
            }]
          }
        ]
      },
    ])
  ],
  declarations: [
    TaskListToolbarComponent,
    TaskFormComponent,
    TaskListComponent,
    TaskListItemComponent,
    TaskFormComponent,
    TaskDetailComponent,
    TaskEditInfoComponent,
    TaskEditTagsComponent,
    TaskFilterPipe],
  providers: [TaskService, TaskResolver]
})
export class TasksModule { }
