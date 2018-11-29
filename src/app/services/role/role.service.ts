import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RoleService {

  baseUrl: string = "http://localhost:8080/roles";

  constructor(private http: HttpClient) { }

  getAll(): Observable<any[]>{
    return this.http.get<any[]>(this.baseUrl + "/all");
  }

  add(role: any) {
    this.http.post<any[]>(this.baseUrl + "/add", role).subscribe();
  }

}
