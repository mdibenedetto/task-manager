


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
        return this.http.get<IUser[]>(`${this.URL}`);
    }

    findUser(id: String): Observable<IUser> {
        return this.http.get<IUser>(`${this.URL}/${id}`);
    }

    saveUser(user: IUser): Observable<Response> {
        return !user.id ? this.addUser(user) : this.updateUser(user);
    }

    addUser(user: IUser): Observable<Response> {
        return this.http.post<Response>(`${this.URL}`, user);
    }

    updateUser(user: IUser): Observable<Response> {
        return this.http.put<Response>(`${this.URL}/${user.id}`, user);
    }

    removeUser(id: String | number): Observable<IUser> {
        return this.http.delete(`${this.URL}/${id}`)
            .pipe(catchError(this.handleError));
    }

}