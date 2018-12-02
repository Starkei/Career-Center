import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
import { UserRoleTableDataSource } from './user-role-table-datasource';
import { Slide } from 'src/app/animations/slide';
import { UserRoleService } from 'src/app/services/userRole/user-role.service';

@Component({
  selector: 'app-user-role-table',
  templateUrl: './user-role-table.component.html',
  styleUrls: ['./user-role-table.component.scss'],
  animations: [Slide]
})
export class UserRoleTableComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource: UserRoleTableDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id'];

  constructor(private service: UserRoleService) {}

  ngOnInit() {
    this.dataSource = new UserRoleTableDataSource(this.service, this.paginator, this.sort);
  }
}
