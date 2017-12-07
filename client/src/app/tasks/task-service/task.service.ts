import { Injectable } from "@angular/core";
import { Response, Headers, RequestOptions } from "@angular/http";
import { HttpClient } from "@angular/common/http";
import { Subject, Observable } from "rxjs";
import "rxjs/add/operator/map";
import "rxjs/add/operator/do";
import { ITask } from "../task";
import { debug } from "util";
import { CommonService } from "app/common/common-service";

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
      let emptyTask = <ITask>{ _id: 0, id: 0 };
      return Observable.of(emptyTask);
    }

    return this.http
      .get(`${this.URL}/${id}`)
      .map(this.extractData)
      .catch(this.handleError);
  }

  getTasks(filterBy?: string): Observable<ITask[]> {
    var baseUrl = filterBy ? `${this.URL}?${filterBy}` : this.URL; 
    return this.http
      .get<ITask[]>(this.URL)
      .map(res => res || [])
      .catch(this.handleError);
  }

  saveTask(task: ITask): Observable<Response> {
    return !task._id ? this.addTask(task) : this.updateTask(task);
  }

  addTask(task: ITask): Observable<Response> {
    return this.http
      .post(this.URL, task, this.options)
      .map((res: Response) => res)
      .catch((error: any) =>
        Observable.throw(error.json().error || "Server error")
      );
  }

  updateTask(body: ITask): Observable<Response> { 
    return this.http
      .put(`${this.URL}/${body["_id"]}`, body, this.options) 
      .catch((error: any) =>
        Observable.throw(error.json().error || "Server error")
      );
  }

  removeTask(id: string | number): Observable<Object>  { 
    return this.http 
      .delete(`${this.URL}/${id}`, this.options)  
      .catch(this.raiseServerError);
  }
}
