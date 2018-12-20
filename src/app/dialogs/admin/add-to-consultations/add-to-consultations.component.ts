import { Component, OnInit } from "@angular/core";
import { UserService } from "src/app/services/user/user.service";
import { EmployeeService } from "src/app/services/employee/employee.service";
import { ConsultationService } from "src/app/services/consultations/consultation.service";

@Component({
  selector: "app-add-to-consultations",
  templateUrl: "./add-to-consultations.component.html",
  styleUrls: ["./add-to-consultations.component.scss"]
})
export class AddToConsultationsComponent implements OnInit {
  users: any[];
  employees: any[];
  time: any;
  row: any = {
    userId: "",
    employeeId: "",
    price: 0,
    date: new Date(),
    title: "",
    room: 0
  };

  constructor(
    private consultation: ConsultationService,
    private user: UserService,
    private employee: EmployeeService
  ) {}

  ngOnInit() {
    this.user.getAll().subscribe(data => (this.users = data));
    this.employee.getAll().subscribe(data => (this.employees = data));
  }

  create() {
    let hm: string[] = this.time.split(":");
    this.row.date.setHours(hm[0]);
    this.row.date.setMinutes(hm[1]);
    this.consultation.add(this.row);
  }
}
