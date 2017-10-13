import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Subject, Observable } from 'rxjs';
import { IUser } from '../user';
import { MessageService } from '../../messages/message-service/message.service';

@Injectable()

export class AuthService {
  BASE_URL = 'http://localhost:8081/api';
  currentUser: IUser;
  redirectUrl: string;

  headers = new Headers({
    'Content-Type': 'application/json'
  });

  options = new RequestOptions({
    headers: this.headers,
    withCredentials: true
  });

  serverError(error: Response) {
    var errorMessage = error.json().error ||
      ('Server error' + ((error.status === 0) ? ': The server might be stopped or your network might have problem.' : ''))
    return Observable.throw(errorMessage);
  }
  constructor(private messageService: MessageService, private http: Http) { }

  isLoggedIn(): boolean {
    return !!this.currentUser;
  }

  checkLoggedInStatus(): Observable<any> {
    return this.http.get(`${this.BASE_URL}/login`, this.options)
      .map((res: Response) => {
        console.log(res)
        this.currentUser = res.json().user;
        return res.json();
      })
      .catch((error: Response) => this.serverError(error));
  }
  login(userName: string, passWord: string): Observable<any> {
    if (!userName || !passWord) {
      this.messageService.addMessage('Please enter your userName and password');
      return;
    }

    let user = {
      userName: userName,
      passWord: passWord
    }

    return this.http.post(`${this.BASE_URL}/login`, user, this.options)
      .map((res: Response) => {
        this.currentUser = res.json().user;
        this.messageService.addMessage(`User: ${this.currentUser.userName} logged in`);
        console.log(res.json());
        return res.json().user;
      })
      .catch((error: Response) => this.serverError(error));
  }

  logout() {
    return this.http.get(`${this.BASE_URL}/logout`, this.options)
      .map((res: Response) => {
        this.currentUser = null;
      })
      .catch((error: Response) => this.serverError(error));
  }

  fakeLogout() {
    this.currentUser = null;
  }
  fakeLogin(userName: string, password: string): void {
    if (!userName || !password) {
      this.messageService.addMessage('Please enter your userName and password');
      return;
    }
    if (userName === 'admin') {
      this.currentUser = {
        id: 1,
        userName: userName,
        isAdmin: true
      };
      this.messageService.addMessage('Admin login');
      return;
    }
    this.currentUser = {
      id: 2,
      userName: userName,
      isAdmin: false
    };
    this.messageService.addMessage(`User: ${this.currentUser.userName} logged in`);
  }
}
