import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
import { SpecializationTableDataSource } from './specialization-table-datasource';
import { Slide } from 'src/app/animations/slide';
import { SpecializationService } from 'src/app/services/specialization/specialization.service';

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

  displayedColumns = ['id', 'name'];

  constructor(private service: SpecializationService){}

  ngOnInit() {
    this.dataSource = new SpecializationTableDataSource(this.service, this.paginator, this.sort);
  }
}
