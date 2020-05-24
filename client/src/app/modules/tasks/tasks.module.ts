import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

// Task entities
import { TaskService } from './services/task-service/task.service';
import { TaskEditGuardService } from './guards/task-edit-guard/task-edit-guard.service';
import { TaskResolver } from './resolvers/task-resolver/task-resolver.service';

import { TaskFilterPipe } from './pages/task-filter/task-filter.pipe';
import { TaskListToolbarComponent } from './pages/task-list-toolbar/task-list-toolbar.component';

import { TaskEditComponent } from './pages/task-edit/task-edit.component';
import { TaskEditInfoComponent } from './pages/task-edit-info/task-edit-info.component';
import { TaskEditTagsComponent } from './pages/task-edit-tags/task-edit-tags.component';

import { TaskListComponent } from './pages/task-list/task-list.component';
import { TaskListItemComponent } from './pages/task-list-item/task-list-item.component';
import { TaskDetailComponent } from './pages/task-detail/task-detail.component';

import { NGMaterialModule } from '../../__shared__/ng-material.module';

const RouteDefinitions: Routes =
  [
    {
      path: '',
      component: TaskListComponent
    },
    {
      path: ':id',
      component: TaskDetailComponent,
      resolve: { task: TaskResolver }
    },
    // {
    //   path: 'new',
    //   redirectTo: ':id/edit',
    // },

    {      
      path: ':id/edit',
      component: TaskEditComponent,
      canDeactivate: [TaskEditGuardService],
      resolve: { task: TaskResolver },
      children: [
        {
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
  ];

@NgModule({
  imports: [
    NGMaterialModule,
    RouterModule,
    FormsModule,
    CommonModule,
    RouterModule.forChild(RouteDefinitions)
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
