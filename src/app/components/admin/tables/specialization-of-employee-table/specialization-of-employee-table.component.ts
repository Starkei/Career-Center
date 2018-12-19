import { Component, OnInit, ViewChild } from "@angular/core";
import { MatPaginator, MatSort, MatDialog } from "@angular/material";
import { SpecializationOfEmployeeTableDataSource } from "./specialization-of-employee-table-datasource";
import { Slide } from "src/app/animations/slide";
import { SpecializationOfEmployeeService } from "src/app/services/specializationOfEmployee/specialization-of-employee.service";
import { AddToSpecializationsOfEmployeesComponent } from "src/app/dialogs/admin/add-to-specializations-of-employees/add-to-specializations-of-employees.component";

@Component({
  selector: "app-specialization-of-employee-table",
  templateUrl: "./specialization-of-employee-table.component.html",
  styleUrls: ["./specialization-of-employee-table.component.scss"],
  animations: [Slide]
})
export class SpecializationOfEmployeeTableComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource: SpecializationOfEmployeeTableDataSource;
  displayedColumns = ["specialization", "employee"];

  constructor(
    private service: SpecializationOfEmployeeService,
    private dialog: MatDialog
  ) {}

  ngOnInit() {
    this.dataSource = new SpecializationOfEmployeeTableDataSource(
      [],
      this.paginator,
      this.sort
    );
    this.service
      .getAll()
      .subscribe(
        data =>
          (this.dataSource = new SpecializationOfEmployeeTableDataSource(
            data,
            this.paginator,
            this.sort
          ))
      );
  }

  addSpecialization() {
    let ref = this.dialog.open(AddToSpecializationsOfEmployeesComponent);
  }
}
