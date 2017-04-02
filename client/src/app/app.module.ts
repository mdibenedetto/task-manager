// import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { TaskFormComponent } from './tasks/task-form/task-form.component';
import { TaskListComponent } from './tasks/task-list/task-list.component';
import { TaskListToolbarComponent } from './tasks/task-list-toolbar/task-list-toolbar.component';
import { TaskListItemComponent } from './tasks/task-list-item/task-list-item.component';
import { TaskService } from './services/task.service';
import { UserComponent } from './user/user/user.component';
import { UserListComponent } from './user/user-list/user-list.component';
import { SettingComponent } from './setting/setting.component';


@NgModule({
  declarations: [
    AppComponent,
    TaskFormComponent,
    TaskListComponent,
    TaskListItemComponent,
    NavigationBarComponent,
    UserComponent,
    UserListComponent,
    SettingComponent,
    TaskListToolbarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([{
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
    ])
  ],
  providers: [TaskService],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
})
export class AppModule {}
