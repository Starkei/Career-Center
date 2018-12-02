import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpecializationService {

  baseUrl: string = "http://localhost:8080/spectializations";

  constructor(private http: HttpClient) { }

  getAll(): Observable<any[]>{
    return this.http.get<any[]>(this.baseUrl + "/all");
  }

  add(specialization: any) {
    this.http.post<any[]>(this.baseUrl + "/add", specialization).subscribe();
  }
}
