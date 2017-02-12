import { Component } from '@angular/core';
import {NavigationBarComponent} from './navigation-bar/navigation-bar.component'
import {TaskComponent} from './task/task.component';
import {TaskListComponent} from './task-list/task-list.component';
import {TaskListItemComponent} from './task-list-item/task-list-item.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
}
