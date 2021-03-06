import { Component, OnInit } from "@angular/core";
import { Select } from "src/app/animations/select";
import { UserRoleService } from "src/app/services/userRole/user-role.service";
import { rubberBand } from "ng-animate";
import { useAnimation, trigger, transition } from "@angular/animations";
import { MatDialog } from "@angular/material";
import { LoginComponent } from "src/app/dialogs/login/login.component";
import { RegistrationComponent } from "src/app/dialogs/registration/registration.component";

@Component({
  selector: "app-user-profile",
  templateUrl: "./user-profile.component.html",
  styleUrls: ["./user-profile.component.scss"],
  animations: [
    Select,
    trigger("rubberBand", [
      transition(
        "on <=> in",
        useAnimation(rubberBand, {
          params: { timing: 1 }
        })
      )
    ])
  ]
})
export class UserProfileComponent implements OnInit {
  user: any;

  hover: boolean = false;
  isClicked: boolean = false;

  links = [
    {
      path: "personalArea",
      title: "Personal area",
      method: () => {
        this.service.loggedIn;
      }
    },
    {
      path: "main",
      title: "Logout",
      method: () => {
        this.service.logout();
      }
    }
  ];

  constructor(private service: UserRoleService, private dialog: MatDialog) {
    this.user = this.service.getCurrentUser();
  }

  ngOnInit() {
    this.isClicked = false;
  }

  Scale() {
    this.hover = !this.hover;
  }

  openLogin() {
    let loginDialog = this.dialog.open(LoginComponent, {});
  }

  getPath(user) {
    if (user) return "http://localhost:8080/images/" + user.user.image;
    return "";
  }

  openRegistration() {
    let registrationDialog = this.dialog.open(RegistrationComponent, {});
  }

  isLogin(): boolean {
    return this.service.loggedIn;
  }
}
