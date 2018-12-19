import { Component, OnInit, ViewChild } from "@angular/core";
import {
  MatPaginator,
  MatSort,
  MatDateFormats,
  MatDialog
} from "@angular/material";
import { UserRoleTableDataSource } from "./user-role-table-datasource";
import { Slide } from "src/app/animations/slide";
import { UserRoleService } from "src/app/services/userRole/user-role.service";
import { AddToUsersRolesComponent } from "src/app/dialogs/admin/add-to-users-roles/add-to-users-roles.component";

@Component({
  selector: "app-user-role-table",
  templateUrl: "./user-role-table.component.html",
  styleUrls: ["./user-role-table.component.scss"],
  animations: [Slide]
})
export class UserRoleTableComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource: UserRoleTableDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ["user", "role"];

  constructor(private service: UserRoleService, private dialog: MatDialog) {}

  ngOnInit() {
    this.dataSource = new UserRoleTableDataSource(
      [],
      this.paginator,
      this.sort
    );
    this.service
      .getAll()
      .subscribe(
        data =>
          (this.dataSource = new UserRoleTableDataSource(
            data,
            this.paginator,
            this.sort
          ))
      );
  }

  addUserRole() {
    let ref = this.dialog.open(AddToUsersRolesComponent);
  }
}
