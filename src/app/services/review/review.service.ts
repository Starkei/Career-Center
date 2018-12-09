import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {

  baseUrl: string = "http://localhost:8080/reviews";

  constructor(private http: HttpClient) { }

  getAll(): Observable<any[]>{
    return this.http.get<any[]>(this.baseUrl + "/all");
  }

  getReviewByConsultantId(consultantId: number): Observable<any[]>{
    return this.http.get<any[]>(this.baseUrl + "/forConsultantId", {
      params: {
        id: consultantId.toString()
      },
    });
  }

}
