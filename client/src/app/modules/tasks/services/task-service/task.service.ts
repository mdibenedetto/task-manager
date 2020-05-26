
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { throwError as observableThrowError, of, Subject, Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { ITask, ITaskType } from "src/app/__shared__/model/task";
import { CommonService } from "src/app/__shared__/common-service";

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

  findTaskTypes(): Observable<ITaskType[]> {
    const url = this.BASE_URL + "/taskTypes";
    return this.http
      .get<ITaskType[]>(url);
  }

  findTask(id: number): Observable<ITask> {
    if (id === 0) {
      let emptyTask = <ITask>{ id: 0 };
      return of(emptyTask);
    }

    return this.http
      .get(`${this.URL}/${id}`).pipe(
        map(this.extractData),
        catchError(this.handleError));
  }

  getTasks(filterBy?: string): Observable<ITask[]> {
    var baseUrl = filterBy ? `${this.URL}?${filterBy}` : this.URL;

    return this.http
      .get<ITask[]>(this.URL)
      .pipe(
        map(res => res || []),
        catchError(this.handleError));
  }

  saveTask(task: ITask): Observable<Response> {
    return !task.id ? this.addTask(task) : this.updateTask(task);
  }

  addTask(task: ITask): Observable<Response> {
    return this.http
      .post(this.URL, task, this.options)
      .pipe(
        map((res: Response) => res),
        catchError((error: any) =>
          observableThrowError(error.json().error || "Server error")
        ));
  }

  updateTask(body: ITask): Observable<Response> {
    return this.http
      .put<Response>(`${this.URL}/${body["id"]}`, body, this.options)
      .pipe(
        catchError((error: any) =>
          observableThrowError(error.json().error || "Server error")
        ));
  }

  removeTask(id: string | number): Observable<Object> {
    return this.http
      .delete(`${this.URL}/${id}`, this.options)
      .pipe(
        catchError(this.raiseServerError));
  }
}
