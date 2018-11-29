import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
import { SpecializationTableDataSource } from './specialization-table-datasource';
import { Slide } from 'src/app/animations/slide';

@Component({
  selector: 'app-specialization-table',
  templateUrl: './specialization-table.component.html',
  styleUrls: ['./specialization-table.component.scss'],
  animations: [Slide]
})
export class SpecializationTableComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource: SpecializationTableDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name'];

  ngOnInit() {
    this.dataSource = new SpecializationTableDataSource(this.paginator, this.sort);
  }
}
