import { Injectable } from '@angular/core';

import { IUser } from '../user';
import { MessageService } from '../../messages/message-service/message.service';

@Injectable()
export class AuthService {
    currentUser: IUser;
    redirectUrl: string;
    constructor(private messageService: MessageService) { }

    isLoggedIn(): boolean {
        return !!this.currentUser;
    }

    login(userName: string, password: string): void {
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

    logout(): void {
        this.currentUser = null;
    }
}




// import { Injectable } from '@angular/core';
// import { Http, Response, Headers, RequestOptions } from '@angular/http';
// import { Subject, Observable } from 'rxjs';

// @Injectable()
// export class AuthService {
//   currentUser;
//   private BASE_URL = 'http://localhost:8081/api/login';
//   constructor(private http: Http) {

//   }
//   isLoggedIn() {
//     return !!this.currentUser;
//   }

//   login(userName: string, passWord: string) {
//     if (!userName || !passWord) {
//       return alert('Please enter your userName and password')
//     }
//     if (userName === 'admin') {
//       this.currentUser = {

//         id: 1,
//         userName: userName,
//         isAdmin: true
//       };
//     }
//     this.currentUser = {
//       id: 2,
//       userName: userName,
//       isAdmin: false
//     };
//   }


//   httpLogin(userName: string, passWord: string): Observable < any > {
//     let headers = new Headers({
//       'Content-Type': 'application/json'
//     });

//     let options = new RequestOptions({
//       headers: headers
//     });

//     let user = {
//       userName: userName,
//       passWord: passWord
//     }

//     return this.http.post(this.BASE_URL, user, options)
//       .map((res: Response) => res.json())
//       .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
//   }

//   logout() {
//     this.currentUser = null;
//   }
// }
