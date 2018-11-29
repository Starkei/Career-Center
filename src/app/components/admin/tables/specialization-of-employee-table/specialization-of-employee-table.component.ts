import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
import { SpecializationOfEmployeeTableDataSource } from './specialization-of-employee-table-datasource';
import { Slide } from 'src/app/animations/slide';

@Component({
  selector: 'app-specialization-of-employee-table',
  templateUrl: './specialization-of-employee-table.component.html',
  styleUrls: ['./specialization-of-employee-table.component.scss'],
  animations: [Slide]
})
export class SpecializationOfEmployeeTableComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource: SpecializationOfEmployeeTableDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name'];

  ngOnInit() {
    this.dataSource = new SpecializationOfEmployeeTableDataSource(this.paginator, this.sort);
  }
}
