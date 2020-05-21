


import { Injectable } from '@angular/core';
import { IUser } from '../../user';
import { CommonService } from 'src/app/common/common-service';
import { HttpClient } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class UserService extends CommonService<IUser>{
    URL = this.BASE_URL + "/users";
    // URL =  "/users";

    constructor(private http: HttpClient) {
        super();
    }

    findUsers(): Observable<IUser[]> {
        return this.http.get(`${this.URL}`).pipe(
            map(this.extractData),
            catchError(this.handleError)
        );
    }

}