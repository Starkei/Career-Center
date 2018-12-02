import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
import { UserTableDataSource } from './user-table-datasource';
import { Slide } from 'src/app/animations/slide';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.scss'],
  animations: [Slide]
})
export class UserTableComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource: UserTableDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'address', 'fullName', 'age', 'nickName', 'phoneNumber'];

  constructor(private  service: UserService){}

  ngOnInit() {
    this.dataSource = new UserTableDataSource(this.service, this.paginator, this.sort);
  }
}
