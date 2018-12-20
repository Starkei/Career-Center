import { Component, OnInit } from "@angular/core";
import { UserRoleService } from "src/app/services/userRole/user-role.service";

@Component({
  selector: "app-registration",
  templateUrl: "./registration.component.html",
  styleUrls: ["./registration.component.scss"]
})
export class RegistrationComponent implements OnInit {
  row: any = {
    fullName: "",
    age: "",
    address: "",
    password: "",
    nickname: "",
    phoneNumber: "",
    image: "",
    email: ""
  };

  constructor(private service: UserRoleService) {}

  ngOnInit() {}

  previewImage(event) {
    this.row.image = <File>event.target.files[0];
  }

  registration() {
    this.service.reqistration(this.row);
  }
}
