import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  baseUrl: string = "http://localhost:8080/employees";

  constructor(private http: HttpClient) { }

  getAll(): Observable<any[]>{
    return this.http.get<any[]>(this.baseUrl + "/all");
  }

  add(review: any) {
    this.http.post<any[]>(this.baseUrl + "/add", review).subscribe();
  }

  getById(id: number): Observable<any[]>{
    return this.http.get<any[]>(this.baseUrl + "/getById", {
      params:{
        id: id.toString()
      }
    });
  }

}
