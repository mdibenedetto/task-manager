import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Subject, Observable } from 'rxjs';
import { ITask } from '../task';


@Injectable() export class ITaskService {
  ITask: Subject<ITask> = new Subject<ITask>();
  ITasks: ITask[] = new Array<ITask>();
  private BASE_URL = 'http://localhost:8081/api/ITasks';

  constructor(private http: Http) {
    this.ITask.subscribe((t) => {
      this.ITasks.push(t);
    });
  }

  findITask(id: number): Observable<ITask> {
    if (id === 0) {
      return  Observable.of(new ITask());
    }
    return this.http.get(`${this.BASE_URL}/${id}`)
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }
  getITasks(filterBy?: string): Observable<ITask[]> {
    var baseUrl = filterBy ? `${this.BASE_URL}?${filterBy}` : this.BASE_URL;

    return this.http.get(this.BASE_URL)
      .map((res: Response) => res.json())
      .catch(this.raiseServerError);
  }

saveITask()
  addTask(ITaskBody: ITask) {
    let bodyString = JSON.stringify(ITaskBody); // Stringify payload
    let headers = new Headers({
      'Content-Type': 'application/json'
    });
    let options = new RequestOptions({
      headers: headers
    });

    return this.http.post(this.BASE_URL, ITaskBody, options)
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));

  }


  updateTask(body: Object): Observable<Response> {
    let bodyString = JSON.stringify(body);
    let headers = new Headers({
      'Content-Type': 'application/json'
    });
    let options = new RequestOptions({
      headers: headers
    });
    return this.http.put(`${this.BASE_URL}/${body['_id']}`, body, options)
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }


  removeITask(id: string | number): Observable<ITask[]> {
    return this.http.delete(`${this.BASE_URL}/${id}`)
      .map((res: Response) => res.json())
      .catch(this.raiseServerError);
  }

  raiseServerError(error): any {
    var message = error.json().error || 'Server error';
    alert(`${message}: 
          NODE server it might be stopped.
          If it is stopped run the command 
          "node server" in a commandline.
    `);
    return Observable.throw(message);
  }
}
