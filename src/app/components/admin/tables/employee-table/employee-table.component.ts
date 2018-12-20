import { Component, OnInit, ViewChild } from "@angular/core";
import { MatPaginator, MatSort, MatDialog } from "@angular/material";
import { EmployeeTableDataSource } from "./employee-table-datasource";
import { Slide } from "src/app/animations/slide";
import { EmployeeService } from "src/app/services/employee/employee.service";
import { AddToEmployeesComponent } from "src/app/dialogs/admin/add-to-employees/add-to-employees.component";
import { SelectionModel } from "@angular/cdk/collections";

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

  displayedColumns = [
    "select",
    "fullName",
    "age",
    "phoneNumber",
    "email",
    "image"
  ];
  selection = new SelectionModel<any>(true, []);

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

  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected()
      ? this.selection.clear()
      : this.dataSource.data.forEach(row => this.selection.select(row));
  }

  addEmployees() {
    let ref = this.dialog.open(AddToEmployeesComponent);
  }
  deleteEmployees() {
    this.service
      .remove(this.selection.selected)
      .subscribe(() =>
        this.service
          .getAll()
          .subscribe(
            data =>
              (this.dataSource = new EmployeeTableDataSource(
                data,
                this.paginator,
                this.sort
              ))
          )
      );
  }
}
