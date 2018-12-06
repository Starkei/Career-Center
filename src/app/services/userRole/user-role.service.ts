import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserRoleService {

  baseUrl: string = "http://localhost:8080/usersRoles";

  constructor(private http: HttpClient) { }

  getAll(): Observable<any[]>{
    return this.http.get<any[]>(this.baseUrl + "/all");
  }

  getUser(user: any): Observable<any> {
    return this.http.get<any[]>(this.baseUrl + "/user",{
      params: {
        nickName: user.nickName,
        password: user.password
      },
    });
  }

  add(userRole: any) {
    this.http.post<any[]>(this.baseUrl + "/add", userRole).subscribe();
  }
}
