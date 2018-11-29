import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
import { ConsultationsTableDataSource } from './consultations-table-datasource';
import { Slide } from 'src/app/animations/slide';

@Component({
  selector: 'app-consultations-table',
  templateUrl: './consultations-table.component.html',
  styleUrls: ['./consultations-table.component.scss'],
  animations: [Slide]
})
export class ConsultationsTableComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource: ConsultationsTableDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name'];

  ngOnInit() {
    this.dataSource = new ConsultationsTableDataSource(this.paginator, this.sort);
  }
}
