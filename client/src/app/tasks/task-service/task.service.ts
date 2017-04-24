import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Subject, Observable } from 'rxjs';
import { Task } from '../../models/models';


@Injectable() export class TaskService {
  task: Subject < Task > = new Subject < Task > ();
  tasks: Task[] = new Array < Task > ();
  private BASE_URL = 'http://localhost:8081/api/tasks';


  constructor(private http: Http) {
    this.task.subscribe((t) => {
      this.tasks.push(t);
    });
  }

  findTask(id: number): Observable < Task > {
    if (id === 0) {
      return Observable.of < Task > ();
    }
    return this.http.get(`${this.BASE_URL}/${id}`)
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }
  getTasks(filterBy?:string): Observable < Task[] > {
    var baseUrl = filterBy ? `${this.BASE_URL}?${filterBy}` : this.BASE_URL;

    return this.http.get(this.BASE_URL)
      .map((res: Response) => res.json())
    .catch(this.raiseServerError); 
  }

  addTask(taskBody: Task) {
    let bodyString = JSON.stringify(taskBody); // Stringify payload
    let headers = new Headers({
      'Content-Type': 'application/json'
    });
    let options = new RequestOptions({
      headers: headers
    });

    return this.http.post(this.BASE_URL, taskBody, options)
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));

  }

   
  updateTask(body: Object): Observable < Comment[] > {
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


  removeTask(id: string | number): Observable < Task[] > {
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
