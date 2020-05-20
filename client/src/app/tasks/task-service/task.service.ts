
import {throwError as observableThrowError, of as observableOf,  Subject, Observable } from 'rxjs';

import {catchError, map} from 'rxjs/operators';
import { Injectable } from "@angular/core";
import { HttpClient, HttpResponse } from "@angular/common/http";


import { ITask } from "../task"; 
import { CommonService } from "../../common/common-service";

@Injectable()
export class TaskService extends CommonService<ITask> {
  task: Subject<ITask> = new Subject<ITask>();
  tasks: ITask[] = new Array<ITask>();
  URL = this.BASE_URL + "/tasks";

  constructor(private http: HttpClient) {
    super();
    this.task.subscribe(t => {
      this.tasks.push(t);
    });
  }

  findTask(id: number): Observable<ITask> {
    if (id === 0) {
      let emptyTask = <ITask>{  id: 0 };
      return observableOf(emptyTask);
    }

    return this.http
      .get(`${this.URL}/${id}`).pipe(
      map(this.extractData),
      catchError(this.handleError),);
  }

  getTasks(filterBy?: string): Observable<ITask[]> {
    var baseUrl = filterBy ? `${this.URL}?${filterBy}` : this.URL; 
    return this.http
      .get<ITask[]>(this.URL).pipe(
      map(res => res || []),    
      catchError(this.handleError),);
  }

  saveTask(task: ITask): Observable<Response> {
    return !task.id ? this.addTask(task) : this.updateTask(task);
  }

  addTask(task: ITask): Observable<Response> {
    return this.http
      .post(this.URL, task, this.options).pipe(
      map((res: Response) => res),
      catchError((error: any) =>
        observableThrowError(error.json().error || "Server error")
      ),);
  }

  updateTask(body: ITask): Observable<Response> { 
    return this.http
      .put<Response>(`${this.URL}/${body["id"]}`, body, this.options).pipe( 
      catchError((error: any) =>
        observableThrowError(error.json().error || "Server error")
      ));
  }

  removeTask(id: string | number): Observable<Object>  { 
    return this.http 
      .delete(`${this.URL}/${id}`, this.options).pipe(  
      catchError(this.raiseServerError));
  }
}
