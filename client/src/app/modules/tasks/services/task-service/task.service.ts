
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { of, Subject, Observable } from 'rxjs';

import { ITask, ITaskType } from "src/app/__shared__/model/task";
import { CommonService } from "src/app/__shared__/common-service";

@Injectable()
export class TaskService extends CommonService<ITask> {

  URL = this.BASE_URL + "/tasks";

  constructor(private http: HttpClient) {
    super();
  }

  findTaskTypes(): Observable<ITaskType[]> {
    const url = this.BASE_URL + "/taskTypes";
    return this.http.get<ITaskType[]>(url);
  }

  findTask(id: number): Observable<ITask> {
    // USE CASE - NEW TASK
    if (id === 0) return of({ id: 0 } as ITask);

    return this.http.get<ITask>(`${this.URL}/${id}`);
  }

  getTasks(filterBy?: string): Observable<ITask[]> {
    var url = filterBy ? `${this.URL}?${filterBy}` : this.URL;
    return this.http.get<ITask[]>(url)
  }

  saveTask(task: ITask): Observable<Response> {
    return !task.id ? this.addTask(task) : this.updateTask(task);
  }

  addTask(task: ITask): Observable<Response> {
    return this.http.post<Response>(this.URL, task);
  }

  updateTask(task: ITask): Observable<Response> {
    const url = `${this.URL}/${task.id}`;
    return this.http.put<Response>(url, task);
  }

  removeTask(id: string | number): Observable<Response> {
    const url = `${this.URL}/${id}`;
    return this.http.delete<Response>(url);
  }
}
