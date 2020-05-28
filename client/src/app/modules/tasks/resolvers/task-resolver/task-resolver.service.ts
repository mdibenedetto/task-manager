
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { MessageService } from 'src/app/__shared__/modules/messages/message-service/message.service';
import { ITask } from '../../../../__shared__/model/task';
import { TaskService } from '../../services/task-service/task.service';


@Injectable()
export class TaskResolver implements Resolve<ITask> {

  constructor(
    private taskService: TaskService,
    private messageService: MessageService,
    private router: Router) {
  }

  resolve(route: ActivatedRouteSnapshot): Observable<ITask> {
    let id = route.params.id;

    if (!id || id === 'new') {
      id = 0;
    }

    if (isNaN(id)) {
      this.messageService.addMessage(`Task id is not a number:${id}`);
      this.router.navigate(['/tasks']);
      return of(null);
    }

    return this.taskService.findTask(+id)
      .pipe(
        map(task => {
          if (task) {
            return task;
          }
          this.messageService.addMessage(`task was not found ${id}`);
          this.router.navigate(['/tasks']);
          return null;
        }),
        // TODO - NEED REFACTORING ??
        catchError(error => {
          this.messageService.addMessage(`Server erro retriving ${error}`);
          this.router.navigate(['/tasks']);
          return of(null);
        }));

  }

}
