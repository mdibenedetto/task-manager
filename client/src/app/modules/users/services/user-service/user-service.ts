


import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';

import { CommonService } from 'src/app/__shared__/common-service';
import { IUser } from 'src/app/__shared__/model/user';

@Injectable({ providedIn: 'root' })
export class UserService extends CommonService<IUser>{
    URL = this.BASE_URL + "/users";

    constructor(private http: HttpClient) {
        super();
    }

    findUsers(): Observable<IUser[]> {
        return this.http.get(`${this.URL}`)
            .pipe(
                catchError(this.handleError)
            );
    }

    findUser(id: String): Observable<IUser> {
        return this.http.get(`${this.URL}/${id}`)
            .pipe(
                tap((res: IUser) => {
                    debugger
                }),
                catchError(this.handleError)
            );
    }

    saveUser(user: IUser): Observable<IUser> {
        return !user.id ? this.addUser(user) : this.updateUser(user);
    }

    addUser(user: IUser): Observable<IUser> {
        return this.http.post(`${this.URL}`, user)
            .pipe(catchError(this.handleError));
    }

    updateUser(user: IUser): Observable<IUser> {
        return this.http.put(`${this.URL}/${user.id}`, user)
            .pipe(catchError(this.handleError));
    }

    removeUser(id: String | number): Observable<IUser> {
        return this.http.delete(`${this.URL}/${id}`)
            .pipe(catchError(this.handleError));
    }

}