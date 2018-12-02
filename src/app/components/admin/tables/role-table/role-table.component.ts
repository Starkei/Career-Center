import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
import { RoleTableDataSource } from './role-table-datasource';
import { Slide } from 'src/app/animations/slide';
import { RoleService } from 'src/app/services/role/role.service';

@Component({
  selector: 'app-role-table',
  templateUrl: './role-table.component.html',
  styleUrls: ['./role-table.component.scss'],
  animations: [Slide]
})
export class RoleTableComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource: RoleTableDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name'];

  constructor(private service: RoleService){}

  ngOnInit() {
    this.dataSource = new RoleTableDataSource(this.service, this.paginator, this.sort);
  }
}
