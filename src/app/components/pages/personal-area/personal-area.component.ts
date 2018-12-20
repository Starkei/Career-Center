import { Component, OnInit } from "@angular/core";
import { UserRoleService } from "src/app/services/userRole/user-role.service";
import { bounceInLeft } from "ng-animate";
import { useAnimation, transition, trigger } from "@angular/animations";

@Component({
  selector: "app-personal-area",
  templateUrl: "./personal-area.component.html",
  styleUrls: ["./personal-area.component.scss"],
  animations: [
    trigger("bounceInLeft", [
      transition(
        ":enter",
        useAnimation(bounceInLeft, {
          params: { timing: 2 }
        })
      )
    ])
  ]
})
export class PersonalAreaComponent implements OnInit {
  user: any;

  constructor(private service: UserRoleService) {
    this.user = this.service.getCurrentUser();
  }

  showRoles(): string {
    let roles = [];
    for (let i = 0; i < this.user.roles.length; i++)
      roles.push(this.user.roles[i].name);
    return roles.toLocaleString();
  }

  ngOnInit() {}

  getPath(user) {
    if (user) return "http://localhost:8080/images/" + user.user.image;
    return "";
  }
}
