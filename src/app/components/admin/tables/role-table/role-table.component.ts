import { Component, OnInit, ViewChild } from "@angular/core";
import { MatPaginator, MatSort, MatDialog } from "@angular/material";
import { RoleTableDataSource } from "./role-table-datasource";
import { Slide } from "src/app/animations/slide";
import { RoleService } from "src/app/services/role/role.service";
import { AddToRolesComponent } from "src/app/dialogs/admin/add-to-roles/add-to-roles.component";

@Component({
  selector: "app-role-table",
  templateUrl: "./role-table.component.html",
  styleUrls: ["./role-table.component.scss"],
  animations: [Slide]
})
export class RoleTableComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource: RoleTableDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ["name"];

  constructor(private service: RoleService, private dialog: MatDialog) {}

  ngOnInit() {
    this.dataSource = new RoleTableDataSource([], this.paginator, this.sort);

    this.service
      .getAll()
      .subscribe(
        data =>
          (this.dataSource = new RoleTableDataSource(
            data,
            this.paginator,
            this.sort
          ))
      );
  }

  addRole() {
    let rel = this.dialog.open(AddToRolesComponent);
  }
}
