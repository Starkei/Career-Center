import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { JwtHelperService } from "@auth0/angular-jwt";

@Injectable({
  providedIn: "root"
})
export class UserRoleService {
  baseUrl: string = "http://localhost:8080/usersRoles";
  currentUser: any;

  constructor(private http: HttpClient, private jwt: JwtHelperService) {}

  getAll(): Observable<any[]> {
    return this.http.get<any[]>(this.baseUrl + "/all");
  }

  getUser(userId: number): Observable<any> {
    return this.http.get<any[]>(this.baseUrl + "/user", {
      params: {
        id: userId.toString()
      }
    });
  }

  login(user: any): Observable<boolean> {
    return this.http
      .post<{ token: string }>(this.baseUrl + "/logIn", user)
      .pipe(
        map(result => {
          localStorage.setItem("token", result.token);
          return true;
        })
      );
  }

  logout() {
    localStorage.removeItem("token");
  }

  get loggedIn(): boolean {
    return localStorage.getItem("token") !== null;
  }

  getCurrentUser() {
    return this.jwt.decodeToken(localStorage.getItem("token"));
  }

  isCurrentUserAdmin(): boolean {
    let user = this.jwt.decodeToken(localStorage.getItem("token"));
    if (!user) return false;
    let isAdmin = false;
    for (let i = 0; i < user.roles.length; i++) {
      if (user.roles[i].name === "admin") {
        isAdmin = true;
      }
    }
    return isAdmin;
  }

  getCurrentUserRoles(): any[] {
    let user = this.jwt.decodeToken(localStorage.getItem("token"));
    if (!user) return [];
    return user.roles;
  }

  add(userRole: any) {
    this.http.post<any[]>(this.baseUrl + "/add", userRole).subscribe();
  }

  reqistration(user: any) {
    const fd = new FormData();
    fd.append("image", user.image, user.image.name);
    fd.append("fullName", user.fullName);
    fd.append("age", user.age);
    fd.append("address", user.address);
    fd.append("nickName", user.nickName);
    fd.append("phoneNumber", user.phoneNumber);
    fd.append("email", user.email);
    fd.append("file", user.image.name);
    fd.append("password", user.image.password);
    this.http.post<any[]>(this.baseUrl + "/registration", fd).subscribe();
  }
}
