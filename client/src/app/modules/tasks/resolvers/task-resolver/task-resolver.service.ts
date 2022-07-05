
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router } from '@angular/router';
import { EMPTY, Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { ITask } from 'src/app/__shared__/model/task';
import { MessageService } from 'src/app/__shared__/modules/messages/message-service/message.service';
import { TaskService } from '../../services/task-service/task.service';


@Injectable()
export class TaskResolver implements Resolve<ITask> {

  constructor(
    private taskService: TaskService,
    private messageService: MessageService,
    private router: Router) {
  }

  resolve(route: ActivatedRouteSnapshot): Observable<ITask> {
    let id = route.params['id'];

    if (!id || id === 'new') {
      id = 0;
    }

    if (isNaN(id)) {
      this.messageService.addMessage(`Task id is not a number:${id}`);
      this.router.navigate(['/tasks']);
      return EMPTY;
    }

    return this.taskService.findTask(+id)
      .pipe(
        map(task => {
          if (task) {
            return task;
          }
          this.messageService.addMessage(`task was not found ${id}`);
          this.router.navigate(['/tasks']);
          return {} as ITask;
        }),
        // TODO - NEED REFACTORING ??
        catchError(error => {
          this.messageService.addMessage(`Server erro retriving ${error}`);
          this.router.navigate(['/tasks']);
          return EMPTY;
        }));

  }

}
