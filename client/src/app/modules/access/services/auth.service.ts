import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EMPTY, Observable, throwError } from 'rxjs';
import { map } from 'rxjs/operators';

import { IUser } from 'src/app/__shared__/model/user';
import { MessageService } from 'src/app/__shared__/modules/messages/message-service/message.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private messageService: MessageService,
    private http: HttpClient) { }

  currentUser?= {} as IUser;
  redirectUrl = {} as string;
  URL = '/access';

  // TODO: CHECK IF STILL NEEDED
  serverError(error: any) {
    let errorMessage;
    if (error.message) {
      errorMessage = `Application Error - Messsage:${error.message}, stack:${error.stack
        }`;
    } else if (error.json()) {
      errorMessage = `Server error: ${error.json().error}`;
    } else {
      errorMessage =
        'Server error: The server might be stopped or your network might have problem.';
    }
    return throwError(errorMessage);
  }

  isLoggedIn(): boolean {
    return !!this.currentUser;
  }

  login(userName: string, passWord: string): Observable<IUser> {

    if (!userName || !passWord) {
      this.messageService.addMessage('Please enter your userName and password');
      return EMPTY;
    }

    return this.http
      .post<IUser>(`${this.URL}/login`, {
        userName,
        passWord
      })
      .pipe(
        map((user) => {
          this.currentUser = user;
          this.messageService.addMessage(
            `User: ${this.currentUser.userName} logged in`
          );
          return this.currentUser;
        })
      );
  }

  logout() {
    return this.http
      .get(`${this.URL}/logout`)
      .pipe(map(() => this.currentUser = undefined));
  }
}
