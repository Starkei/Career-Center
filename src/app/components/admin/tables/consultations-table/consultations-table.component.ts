import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
import { ConsultationsTableDataSource } from './consultations-table-datasource';
import { Slide } from 'src/app/animations/slide';
import { ConsultationService } from 'src/app/services/consultations/consultation.service';

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
  displayedColumns = ['id', 'price', 'date', 'title', 'room'];

  constructor(private service: ConsultationService){}

  ngOnInit() {
    this.dataSource = new ConsultationsTableDataSource(this.service, this.paginator, this.sort);
  }
}
