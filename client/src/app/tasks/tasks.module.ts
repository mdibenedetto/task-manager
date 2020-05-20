import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import { TaskService } from './task-service/task.service';
import { TaskFilterPipe } from './task-filter/task-filter.pipe';
import { TaskResolver } from './task-resolver/task-resolver.service';
import { TaskListToolbarComponent } from './task-list-toolbar/task-list-toolbar.component';
import { TaskEditComponent } from './task-edit/task-edit.component';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskListItemComponent } from './task-list-item/task-list-item.component';
import { TaskDetailComponent } from './task-detail/task-detail.component';
import { TaskEditInfoComponent } from './task-edit-info/task-edit-info.component';
import { TaskEditTagsComponent } from './task-edit-tags/task-edit-tags.component';
// import { AuthGuardService } from '../user/auth-guard/auth-guard.service';
import { TaskEditGuardService } from './task-edit-guard/task-edit-guard.service';
import { NGMaterialModule } from '../common/ng-material.module';

@NgModule({
  imports: [
    NGMaterialModule,
    RouterModule,
    FormsModule,
    CommonModule,
    RouterModule.forChild([
      // {
      //   path: 'tasks',
      //   canActivate:[AuthGuardService],
      //   children: [
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
        component: TaskEditComponent,
        canDeactivate: [TaskEditGuardService],
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
      //   ]
      // },
    ])
  ],
  declarations: [
    TaskListToolbarComponent,
    TaskEditComponent,
    TaskListComponent,
    TaskListItemComponent,
    TaskEditComponent,
    TaskDetailComponent,
    TaskEditInfoComponent,
    TaskEditTagsComponent,
    TaskFilterPipe],
  providers: [TaskService, TaskResolver, TaskEditGuardService]
})
export class TasksModule { }
