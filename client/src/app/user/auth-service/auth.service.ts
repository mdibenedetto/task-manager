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
  constructor(private messageService: MessageService, private http: Http) {}

  isLoggedIn(): boolean {
    return !!this.currentUser;
  }

  checkLoggedInStatus() {
    let login$ = this.http.get(`${this.BASE_URL}/login`)
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
      
    login$.subscribe(res => {
      console.log(res)
    });
  }
  login(userName: string, passWord: string): Observable < any > {
    if (!userName || !passWord) {
      this.messageService.addMessage('Please enter your userName and password');
      return;
    }

    let headers = new Headers({
      'Content-Type': 'application/json'
    });

    let options = new RequestOptions({
      headers: headers,
      withCredentials: true
    });

    let user = {
      userName: userName,
      passWord: passWord
    }

    return this.http.post(`${this.BASE_URL}/login`, user, options)
      .map((res: Response) => {
        this.currentUser = res.json().user;
        this.messageService.addMessage(`User: ${this.currentUser.userName} logged in`);
        console.log(res.json());
        return res.json().user;
      })
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

  logout() {
    return this.http.get(`${this.BASE_URL}/logout`)
      .map((res: Response) => {
        this.currentUser = null;
      })
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
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
