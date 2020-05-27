import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

// Task entities
import { TaskService } from './services/task-service/task.service';
import { TaskEditGuardService } from './guards/task-edit-guard/task-edit-guard.service';
import { TaskResolver } from './resolvers/task-resolver/task-resolver.service';

import { TaskFilterPipe } from './pages/task-list/components/task-filter/task-filter.pipe';
import { TaskListToolbarComponent } from './pages/task-list/components/task-list-toolbar/task-list-toolbar.component';

import { TaskEditComponent } from './pages/task-edit/task-edit.component';
import { TaskEditInfoComponent, TaskEditTagsComponent } from './pages/task-edit/components';
import { TaskListComponent } from './pages/task-list/task-list.component';
import { TaskListItemComponent } from './pages/task-list/components/task-list-item/task-list-item.component';
import { TaskDetailComponent } from './pages/task-detail/task-detail.component';

import { NGMaterialModule } from '../../__shared__/modules/ng-material.module';

const editRoute = {
  component: TaskEditComponent,
  canDeactivate: [TaskEditGuardService],
  resolve: { task: TaskResolver }
};

const RouteDefinitions: Routes =
  [
    {
      path: '',
      component: TaskListComponent
    },
    {
      path: ':id/view',
      component: TaskDetailComponent,
      resolve: { task: TaskResolver }
    },
    {
      path: 'new',
      ...editRoute
    },

    {
      path: ':id/edit',
      ...editRoute
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
    TaskEditInfoComponent,
    TaskEditTagsComponent,
    TaskListComponent,
    TaskListItemComponent,
    TaskEditComponent,
    TaskDetailComponent,
    TaskFilterPipe],
  providers: [TaskService, TaskResolver, TaskEditGuardService]
})
export class TasksModule { }
