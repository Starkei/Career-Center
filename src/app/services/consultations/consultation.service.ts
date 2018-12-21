import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { identifierModuleUrl } from "@angular/compiler";

@Injectable({
  providedIn: "root"
})
export class ConsultationService {
  baseUrl: string = "http://localhost:8080/consultaions";

  constructor(private http: HttpClient) {}

  getAll(): Observable<any[]> {
    return this.http.get<any[]>(this.baseUrl + "/all");
  }

  getAllFree(): Observable<any[]> {
    return this.http.get<any[]>(this.baseUrl + "/all/free");
  }

  getByUserId(id): Observable<any[]> {
    return this.http.get<any[]>(this.baseUrl + "/all/byId", {
      params: { userId: id.toString() }
    });
  }

  getBestFive(): Observable<any[]> {
    return this.http.get<any[]>(this.baseUrl + "/best/five");
  }

  getByDate(date: Date): Observable<any[]> {
    return this.http.get<any[]>(this.baseUrl + "/getByDate", {
      params: {
        date: date.toString()
      }
    });
  }

  getNearDate(): Observable<any[]> {
    return this.http.get<any[]>(this.baseUrl + "/getNearDate");
  }

  add(consultaion: any) {
    this.http.post<any[]>(this.baseUrl + "/add", consultaion).subscribe();
  }

  remove(consultaions: any[]): Observable<any[]> {
    return this.http.post<any[]>(this.baseUrl + "/remove", consultaions);
  }

  sendToDocx() {
    this.http.get<any>(this.baseUrl + "/docx").subscribe();
  }

  sendToExcel() {
    this.http.get<any>(this.baseUrl + "/excel").subscribe();
  }

  sendToAll() {
    this.http.get<any>(this.baseUrl + "/reports").subscribe();
  }

  writeUser(token: any, consultaion: any): Observable<any> {
    return this.http.post<any>(this.baseUrl + "/writeUser", {
      token,
      consultaion
    });
  }
}
