import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
// Task entities
import { TaskService } from './services/task-service/task.service';
import { TaskFilterPipe } from './components/task-filter/task-filter.pipe';
import { TaskResolver } from './resolvers/task-resolver/task-resolver.service';
import { TaskListToolbarComponent } from './components/task-list-toolbar/task-list-toolbar.component';

import { TaskEditComponent } from './components/task-edit/task-edit.component';
import { TaskEditInfoComponent } from './components/task-edit-info/task-edit-info.component';
import { TaskEditTagsComponent } from './components/task-edit-tags/task-edit-tags.component';

import { TaskListComponent } from './components/task-list/task-list.component';
import { TaskListItemComponent } from './components/task-list-item/task-list-item.component';
import { TaskDetailComponent } from './components/task-detail/task-detail.component';
// import { AuthGuardService } from '../user/auth-guard/auth-guard.service';
import { TaskEditGuardService } from './components/task-edit-guard/task-edit-guard.service';
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
