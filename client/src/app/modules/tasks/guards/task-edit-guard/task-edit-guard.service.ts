import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { TaskEditComponent } from '../../pages/task-edit/task-edit.component';

@Injectable()
export class TaskEditGuardService implements CanDeactivate<TaskEditComponent> {

  constructor() { }

  canDeactivate(component: TaskEditComponent): boolean {
    if (component.isDirty) {
      let taskTitle = component.task.title || 'New Task';
      return confirm
        (`Navigate away and lose all changes to ${taskTitle}`);
    }
    return true;
  }
}
