import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Subject, Observable } from 'rxjs';
import { Task } from '../models/models';


@Injectable() export class TaskService {
  task: Subject < Task > = new Subject < Task > ();
  tasks: Task[] = new Array < Task > ();
  private BASE_URL = 'http://localhost:8081/api/tasks';


  constructor(private http: Http) {
    this.task.subscribe((t) => {
      this.tasks.push(t);
    });
  }

  getTasks(): Observable < Task[] > {
    return this.http.get(this.BASE_URL)
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

  addTask(taskBody: Task) {
    let bodyString = JSON.stringify(taskBody); // Stringify payload
    let headers = new Headers({
      'Content-Type': 'application/json'
    });
    let options = new RequestOptions({
      headers: headers
    });

    return this.http.post(this.BASE_URL, {
        taskBody
      }, options)
      .map((res: Response) => {
        res.json();
      })
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));

  }

  // // Update a comment
  // updateComment(body: Object): Observable < Comment[] > {
  //   let bodyString = JSON.stringify(body); // Stringify payload
  //   let headers = new Headers({
  //     'Content-Type': 'application/json'
  //   }); // ... Set content type to JSON
  //   let options = new RequestOptions({
  //     headers: headers
  //   }); // Create a request option

  //   return this.http.put(`${this.commentsUrl}/${body['id']}`, body, options) // ...using put request
  //     .map((res: Response) => res.json()) // ...and calling .json() on the response to return data
  //     .catch((error: any) => Observable.throw(error.json().error || 'Server error')); //...errors if any
  // }


  removeTask(id: string | number): Observable < Task[] > {
    return this.http.delete(`${this.BASE_URL}/${id}`)
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error')); //...errors if any
  }
}
