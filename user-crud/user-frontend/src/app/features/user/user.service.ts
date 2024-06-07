import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserList, UserRequest } from './user.model';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl = 'http://localhost:8080/users';

  constructor(private http: HttpClient) { }

  getAllUsers(): Observable<UserList> {
    return this.http.get<UserList>(this.apiUrl);
  }

  getUserById(id: number): Observable<UserList> {
    return this.http.get<UserList>(`${this.apiUrl}/${id}`);
  }

  createUser(userRequest: UserRequest): Observable<any> {
    return this.http.post<any>(this.apiUrl, userRequest, {responseType: 'text' as 'json'});
  }

  updateUser(id: number, userRequest: UserRequest): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${id}`, userRequest, {responseType: 'text' as 'json'});
  }

  deleteUser(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`, {responseType: 'text' as 'json'});
  }

}
