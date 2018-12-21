import { Component, OnInit } from "@angular/core";
import { UserRoleService } from "src/app/services/userRole/user-role.service";
import { bounceInLeft } from "ng-animate";
import { useAnimation, transition, trigger } from "@angular/animations";
import { ConsultationService } from "src/app/services/consultations/consultation.service";
import { DataSource } from "src/app/models/data-source";

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
  dataSource: DataSource[] = [];

  constructor(
    private service: UserRoleService,
    private cons: ConsultationService
  ) {
    this.user = this.service.getCurrentUser();
  }

  showRoles(): string {
    let roles = [];
    for (let i = 0; i < this.user.roles.length; i++)
      roles.push(this.user.roles[i].name);
    return roles.toLocaleString();
  }

  ngOnInit() {
    this.dataSource = [];
    this.cons
      .getByUserId(this.service.getCurrentUser().user.id)
      .subscribe(data => {
        for (let i = 0; i < data.length; i++)
          this.dataSource.push(new DataSource(data[i], false));
      });
  }

  getPath(user) {
    if (user) return "http://localhost:8080/images/" + user.user.image;
    return "";
  }
}
