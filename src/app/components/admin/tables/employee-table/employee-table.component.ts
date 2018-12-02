import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
import { EmployeeTableDataSource } from './employee-table-datasource';
import { Slide } from 'src/app/animations/slide';
import { EmployeeService } from 'src/app/services/employee/employee.service';

@Component({
  selector: 'app-employee-table',
  templateUrl: './employee-table.component.html',
  styleUrls: ['./employee-table.component.scss'],
  animations: [Slide]
})
export class EmployeeTableComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource: EmployeeTableDataSource;

  displayedColumns = ['id', 'fullName', 'age', 'phoneNumber', 'email'];

  constructor(private service: EmployeeService){}

  ngOnInit() {
    this.dataSource = new EmployeeTableDataSource(this.service, this.paginator, this.sort);
  }
}
