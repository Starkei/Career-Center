import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class EmployeeService {
  baseUrl: string = "http://localhost:8080/employees";

  constructor(private http: HttpClient) {}

  getAll(): Observable<any[]> {
    return this.http.get<any[]>(this.baseUrl + "/all");
  }

  add(employee: any) {
    const fd = new FormData();
    fd.append("image", employee.image, employee.image.name);
    fd.append("fullName", employee.fullName);
    fd.append("age", employee.age);
    fd.append("phoneNumber", employee.phoneNumber);
    fd.append("email", employee.email);
    fd.append("file", employee.image.name);
    this.http.post<any[]>(this.baseUrl + "/add", fd).subscribe();
  }

  getById(id: number): Observable<any[]> {
    return this.http.get<any[]>(this.baseUrl + "/getById", {
      params: {
        id: id.toString()
      }
    });
  }

  remove(employees: any[]): Observable<any[]> {
    return this.http.post<any[]>(this.baseUrl + "/remove", employees);
  }
}
