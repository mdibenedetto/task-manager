import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { TaskComponent } from './tasks/task/task.component';
import { TaskListComponent } from './tasks/task-list/task-list.component';
import { TaskListItemComponent } from './tasks/task-list-item/task-list-item.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { TaskService } from './services/task.service';

@NgModule({
  declarations: [
    AppComponent,
    TaskComponent,
    TaskListComponent,
    TaskListItemComponent,
    NavigationBarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [TaskService],
  bootstrap: [AppComponent]
})
export class AppModule {}
