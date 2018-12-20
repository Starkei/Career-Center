import { Component, OnInit } from "@angular/core";
import { EmployeeService } from "src/app/services/employee/employee.service";

@Component({
  selector: "app-add-to-employees",
  templateUrl: "./add-to-employees.component.html",
  styleUrls: ["./add-to-employees.component.scss"]
})
export class AddToEmployeesComponent implements OnInit {
  row: any = {
    fullName: "",
    age: 0,
    phoneNumber: 1,
    email: "",
    image: ""
  };

  constructor(private service: EmployeeService) {}

  ngOnInit() {}

  previewImage(event) {
    this.row.image = <File>event.target.files[0];
  }

  create() {
    this.service.add(this.row);
  }
}
