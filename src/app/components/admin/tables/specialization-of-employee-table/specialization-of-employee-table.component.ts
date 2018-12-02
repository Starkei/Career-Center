import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
import { SpecializationOfEmployeeTableDataSource } from './specialization-of-employee-table-datasource';
import { Slide } from 'src/app/animations/slide';
import { SpecializationOfEmployeeService } from 'src/app/services/specializationOfEmployee/specialization-of-employee.service';

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

  displayedColumns = ['id'];

  constructor(private service: SpecializationOfEmployeeService){}

  ngOnInit() {
    this.dataSource = new SpecializationOfEmployeeTableDataSource(this.service, this.paginator, this.sort);
  }
}
