import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EMPTY, map, Observable } from 'rxjs';

import { IUser } from '../../../__shared__/model';
import { MessageService } from '../../../__shared__/modules/messages';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private messageService: MessageService,
    private http: HttpClient
  ) { }

  currentUser?: IUser;
  redirectUrl?: string;
  URL = '/access';

  // TODO: CHECK IF STILL NEEDED
  // serverError(error: any) {
  //   let errorMessage;
  //   if (error.message) {
  //     errorMessage = `Application Error - Messsage:${error.message}, stack:${error.stack
  //       }`;
  //   } else if (error.json()) {
  //     errorMessage = `Server error: ${error.json().error}`;
  //   } else {
  //     errorMessage =
  //       'Server error: The server might be stopped or your network might have problem.';
  //   }
  //   return throwError(errorMessage);
  // }

  isLoggedIn(): boolean {
    return true
    // return !!this.currentUser;
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

  logout(): Observable<void> {
    return this.http
      .get(`${this.URL}/logout`)
      .pipe(map(() => this.currentUser = undefined));
  }
}
