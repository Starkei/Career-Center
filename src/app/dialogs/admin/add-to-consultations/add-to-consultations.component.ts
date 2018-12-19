import { Component, OnInit } from "@angular/core";
import { UserService } from "src/app/services/user/user.service";
import { EmployeeService } from "src/app/services/employee/employee.service";

@Component({
  selector: "app-add-to-consultations",
  templateUrl: "./add-to-consultations.component.html",
  styleUrls: ["./add-to-consultations.component.scss"]
})
export class AddToConsultationsComponent implements OnInit {
  users: any[];
  employees: any[];

  constructor(private user: UserService, private employee: EmployeeService) {}

  ngOnInit() {
    this.user.getAll().subscribe(data => (this.users = data));
    this.employee.getAll().subscribe(data => (this.employees = data));
  }
}
