// import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { TaskService } from './services/task.service';
import { TaskListToolbarComponent } from './tasks/task-list-toolbar/task-list-toolbar.component';

import { RouteDefinitions, AppRoutingModule, routingComponents } from './app.routing';

@NgModule({
  declarations: [
    AppComponent,
    NavigationBarComponent,
    TaskListToolbarComponent,
    routingComponents
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [TaskService],
  bootstrap: [AppComponent]
})
export class AppModule { }
