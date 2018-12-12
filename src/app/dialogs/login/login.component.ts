import { Component, OnInit } from "@angular/core";
import { UserRoleService } from "src/app/services/userRole/user-role.service";
import { rubberBand } from "ng-animate";
import { Router } from "@angular/router";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit {
  user: any;
  nickName: string = "";
  password: string = "";

  constructor(private service: UserRoleService, private route: Router) {}

  ngOnInit() {}

  login() {
    let user = {
      nickName: this.nickName,
      password: this.password
    };
    this.service.login(user).subscribe(users => {
      this.user = users[0];
      this.route.navigate([{ outlets: { navbar: ["personalArea"] } }]);
    });
  }
}
