import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpecializationOfEmployeeService {

  baseUrl: string = "http://localhost:8080/specializationsOfEmployees";

  constructor(private http: HttpClient) { }

  getAll(): Observable<any[]>{
    return this.http.get<any[]>(this.baseUrl + "/all");
  }

  add(specializationOfEmployee: any) {
    this.http.post<any[]>(this.baseUrl + "/add", specializationOfEmployee).subscribe();
  }
}
