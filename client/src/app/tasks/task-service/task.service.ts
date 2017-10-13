import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Subject, Observable } from 'rxjs';
import { ITask } from '../task';

@Injectable() export class TaskService {
  task: Subject<ITask> = new Subject<ITask>();
  tasks: ITask[] = new Array<ITask>();
  // private BASE_URL = 'http://localhost:8081/api/tasks';
  private BASE_URL = 'api/tasks';

  constructor(private http: Http) {
    this.task.subscribe((t) => {
      this.tasks.push(t);
    });
  }

  findTask(id: number): Observable<ITask> {
    if (id === 0) {
      let emptyTask = <ITask>{_id:0, id:0};    
      return Observable.of(emptyTask);
    }

    return this.http.get(`${this.BASE_URL}/${id}`)
      .map(this.extractData)
      .catch(this.handleError);
  }

  getTasks(filterBy?: string): Observable<ITask[]> {
    var baseUrl = filterBy ? `${this.BASE_URL}?${filterBy}` : this.BASE_URL;
    return this.http.get(this.BASE_URL)
      .map(this.extractData) 
      .catch(this.raiseServerError);
  }

  
  saveTask(task): Observable<Response> {
    return (!task._id) ?
      this.addTask(task) : this.updateTask(task);
  }

  addTask(task: ITask): Observable<Response> {
    // let bodyString = JSON.stringify(task); 
    let headers = new Headers({
      'Content-Type': 'application/json'
    });
    let options = new RequestOptions({
      headers: headers
    });

    return this.http.post(this.BASE_URL, task, options)
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));

  }


  updateTask(body: ITask): Observable<Response> {
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


  removeTask(id: string | number): Observable<ITask[]> {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers })
    return this.http.delete(`${this.BASE_URL}/${id}`,options)
      .map((res: Response) => res.json())
      .do(data => {       
        console.log('removeTask: ' + JSON.stringify(data))
      })
      .catch(this.raiseServerError);
  }
 

  private  raiseServerError(error): any {
    var message = error.json().error || 'Server error';
    alert(`${message}: 
          NODE server it might be stopped.
          If it is stopped run the command 
          "node server" in a commandline.
    `);
    console.error(message);
    return Observable.throw(message);
  }
  
    private extractData(res: Response) { 
      let body = res.json();
      return body.data || {};
    }
  
    private handleError(error: Response): Observable<any> {
      console.error(error);
      return Observable.throw(error.json().error || 'Server error');
  }
  
}
