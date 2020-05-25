
import { throwError as observableThrowError, Subject, Observable } from 'rxjs';

import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { map, catchError } from 'rxjs/operators';

import { MessageService } from "../../../../__shared__/modules/messages/message-service/message.service";
import { CommonService } from "../../../../__shared__/common-service";
import { IUser } from "../../../../__shared__/model/user";

@Injectable()
export class AuthService extends CommonService<IUser> {

  constructor(
    private messageService: MessageService,
    private http: HttpClient
  ) {
    super();
  }

  currentUser: IUser;
  redirectUrl: string;
  URL = this.BASE_URL;

  serverError(error: any) {
    let errorMessage;
    if (error.message) {
      errorMessage = `Application Error - Messsage:${error.message}, stack:${
        error.stack
        }`;
    } else if (error.json()) {
      errorMessage = `Server error: ${error.json().error}`;
    } else {
      errorMessage =
        "Server error: The server might be stopped or your network might have problem.";
    }
    return observableThrowError(errorMessage);
  }

  isLoggedIn(): boolean {
    return !!this.currentUser;
  }

  checkLoggedInStatus(): Observable<any> {
    return this.http
      .post(`${this.URL}/login`, this.options).pipe(
        map((res: Response) => {
          this.currentUser = this.parseResponse(res, 'user');
          return this.currentUser;
        }),
        catchError((error: Response) => this.serverError(error))
      );
  }

  login(userName: string, passWord: string): Observable<IUser> {
    if (!userName || !passWord) {
      this.messageService.addMessage("Please enter your userName and password");
      return;
    }
 
    return this.http
      .post<IUser>(`${this.URL}/login/`, {
        userName,
        passWord
      })
      .pipe(
        map((res: IUser) => {               
          this.currentUser = this.parseResponse(res, 'user');
          this.messageService.addMessage(
            `User: ${this.currentUser.userName} logged in`
          );
          return this.currentUser;
        }),
        catchError((error: Response) => this.serverError(error))
      );
  }

  logout() {
    return this.http
      .get(`${this.URL}/logout`, this.options)
      .pipe(
        map((res: Response) => {
          this.currentUser = null;
        }),
        catchError((error: Response) => this.serverError(error))
      );
  }
}
