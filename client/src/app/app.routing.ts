import { Route, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { TaskFormComponent } from './tasks/task-form/task-form.component';
import { TaskListComponent } from './tasks/task-list/task-list.component';
// import { TaskListToolbarComponent } from './tasks/task-list-toolbar/task-list-toolbar.component';
import { TaskListItemComponent } from './tasks/task-list-item/task-list-item.component';
import { TaskService } from './services/task.service';

import { UserComponent } from './user/user/user.component';
import { UserListComponent } from './user/user-list/user-list.component';
import { SettingComponent } from './setting/setting.component';

export const RouteDefinitions: Route[] = [{
    path: '',
    redirectTo: '/tasks',
    pathMatch: 'full'
},
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
{
    path: 'users',
    component: UserListComponent
},
{
    path: 'settings',
    component: SettingComponent
}
];

@NgModule({
    imports: [RouterModule.forRoot(RouteDefinitions)],
    exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [
    TaskFormComponent,
    TaskListComponent,
    TaskListItemComponent,
    UserComponent,
    UserListComponent,
    SettingComponent
];