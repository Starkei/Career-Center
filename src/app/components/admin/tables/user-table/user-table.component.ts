import { Component, OnInit, ViewChild } from "@angular/core";
import { MatPaginator, MatSort, MatDialog } from "@angular/material";
import { UserTableDataSource } from "./user-table-datasource";
import { Slide } from "src/app/animations/slide";
import { UserService } from "src/app/services/user/user.service";
import { AddToUsersComponent } from "src/app/dialogs/admin/add-to-users/add-to-users.component";

@Component({
  selector: "app-user-table",
  templateUrl: "./user-table.component.html",
  styleUrls: ["./user-table.component.scss"],
  animations: [Slide]
})
export class UserTableComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource: UserTableDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ["address", "fullName", "age", "nickName", "phoneNumber"];

  constructor(private service: UserService, private dialog: MatDialog) {}

  ngOnInit() {
    this.dataSource = new UserTableDataSource([], this.paginator, this.sort);
    this.service
      .getAll()
      .subscribe(
        data =>
          (this.dataSource = new UserTableDataSource(
            data,
            this.paginator,
            this.sort
          ))
      );
  }

  addUser() {
    let ref = this.dialog.open(AddToUsersComponent);
  }
}
