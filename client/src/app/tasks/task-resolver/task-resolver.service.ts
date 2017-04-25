import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Task } from '../../models/models';

@Injectable()
export class TaskResolver implements Resolve<Task> {

  constructor() { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Task> {

    return null;
  }

}
