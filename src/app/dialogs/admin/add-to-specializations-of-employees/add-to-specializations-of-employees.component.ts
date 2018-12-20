import { Component, OnInit } from "@angular/core";
import { SpecializationOfEmployeeService } from "src/app/services/specializationOfEmployee/specialization-of-employee.service";
import { SpecializationService } from "src/app/services/specialization/specialization.service";
import { EmployeeService } from "src/app/services/employee/employee.service";

@Component({
  selector: "app-add-to-specializations-of-employees",
  templateUrl: "./add-to-specializations-of-employees.component.html",
  styleUrls: ["./add-to-specializations-of-employees.component.scss"]
})
export class AddToSpecializationsOfEmployeesComponent implements OnInit {
  employees_data: any[];
  specialization_data: any[];

  specilaization_of_employee: any = {
    specialization: "",
    employee: ""
  };

  constructor(
    private service: SpecializationOfEmployeeService,
    private specializations: SpecializationService,
    private employees: EmployeeService
  ) {}

  ngOnInit() {
    this.specializations
      .getAll()
      .subscribe(data => (this.specialization_data = data));
    this.employees.getAll().subscribe(data => (this.employees_data = data));
  }

  create() {
    this.service.add(this.specilaization_of_employee);
  }
}
