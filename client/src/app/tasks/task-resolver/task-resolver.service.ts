import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { ITask } from '../task';
import { TaskService } from '../task-service/task.service';

@Injectable()
export class TaskResolver implements Resolve<ITask> {

  constructor(private taskService: TaskService, private router: Router) {
  }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ITask> {
    let id = route.params['id'];
    if (isNaN(id)) {
      console.warn(`Task id is not a number:${id}`);
      this.router.navigate(['/tasks']);
      return Observable.of(null);
    }
   
    return this.taskService.findTask(+id)
      .map(task => {
        if (task) {
          return task;
        }
        console.log(`task was not found ${id}`);
        this.router.navigate(['/tasks']);
        return null;
      })
      .catch(error => {
        console.warn(`Server erro retriving ${error}`);
        this.router.navigate(['/tasks']);
        return Observable.of(null);
      });
  }

}
