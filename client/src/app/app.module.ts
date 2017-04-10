// import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { TasksModule } from './tasks/tasks.module'

// import { TaskService } from './services/task.service';
// import { TaskListToolbarComponent } from './tasks/task-list-toolbar/task-list-toolbar.component';
 
import { RouteDefinitions, AppRoutingModule, routingComponents } from './app.routing';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    TasksModule,
  ],
  declarations: [
    AppComponent,
    NavigationBarComponent,
    routingComponents
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
