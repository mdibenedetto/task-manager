import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { NGMaterialModule } from '../../__shared__/modules/ng-material.module';
import { TaskEditGuardService } from './guards/task-edit-guard/task-edit-guard.service';
import { TaskDetailComponent } from './pages/task-detail/task-detail.component';
import { TaskEditInfoComponent, TaskEditTagsComponent } from './pages/task-edit/components';
import { TaskEditComponent } from './pages/task-edit/task-edit.component';
import { TaskListItemComponent } from './pages/task-list/components/task-list-item/task-list-item.component';
import { TaskListToolbarComponent } from './pages/task-list/components/task-list-toolbar/task-list-toolbar.component';
import { TaskListComponent } from './pages/task-list/task-list.component';
import { TaskFilterPipe } from './pipes/task-filter.pipe';
import { TaskResolver } from './resolvers/task-resolver/task-resolver.service';
// Task entities
import { TaskService } from './services/task-service/task.service';





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
