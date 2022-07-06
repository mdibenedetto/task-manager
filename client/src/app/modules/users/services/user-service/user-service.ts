


import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IUser } from 'src/app/__shared__/model/user';

@Injectable({ providedIn: 'root' })
export class UserService {
  URL = '/users';

  constructor(private http: HttpClient) { }

  findUsers(): Observable<IUser[]> {
    return this.http.get<IUser[]>(`${this.URL}`);
  }

  findUser(id: string): Observable<IUser> {
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

  removeUser(id: string | number): Observable<Response> {
    return this.http.delete<Response>(`${this.URL}/${id}`);
  }

}
