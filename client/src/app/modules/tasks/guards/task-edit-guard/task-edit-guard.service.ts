import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { TaskEditComponent } from '../../pages/task-edit/task-edit.component';

@Injectable()
export class TaskEditGuardService implements CanDeactivate<TaskEditComponent> {

  canDeactivate(component: TaskEditComponent): boolean {
    if (component.isDirty) {
      const taskTitle = component.task.title || 'New Task';
      return confirm
        (`Navigate away and lose all changes to ${taskTitle}`);
    }
    return true;
  }
}
