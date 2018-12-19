import { Component, OnInit, ViewChild } from "@angular/core";
import { MatPaginator, MatSort, MatDialog } from "@angular/material";
import { EmployeeTableDataSource } from "./employee-table-datasource";
import { Slide } from "src/app/animations/slide";
import { EmployeeService } from "src/app/services/employee/employee.service";
import { AddToEmployeesComponent } from "src/app/dialogs/admin/add-to-employees/add-to-employees.component";

@Component({
  selector: "app-employee-table",
  templateUrl: "./employee-table.component.html",
  styleUrls: ["./employee-table.component.scss"],
  animations: [Slide]
})
export class EmployeeTableComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource: EmployeeTableDataSource;

  displayedColumns = ["fullName", "age", "phoneNumber", "email", "image"];

  constructor(private service: EmployeeService, private dialog: MatDialog) {}

  ngOnInit() {
    this.dataSource = new EmployeeTableDataSource(
      [],
      this.paginator,
      this.sort
    );
    this.service
      .getAll()
      .subscribe(
        data =>
          (this.dataSource = new EmployeeTableDataSource(
            data,
            this.paginator,
            this.sort
          ))
      );
  }

  addEmployees() {
    let ref = this.dialog.open(AddToEmployeesComponent);
  }
}
