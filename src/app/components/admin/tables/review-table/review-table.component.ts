import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
import { ReviewTableDataSource } from './review-table-datasource';
import { Slide } from 'src/app/animations/slide';
import { ReviewService } from 'src/app/services/review/review.service';

@Component({
  selector: 'app-review-table',
  templateUrl: './review-table.component.html',
  styleUrls: ['./review-table.component.scss'],
  animations: [Slide]
})
export class ReviewTableComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource: ReviewTableDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'text'];

  constructor(private service: ReviewService){}

  ngOnInit() {
    this.dataSource = new ReviewTableDataSource(this.service, this.paginator, this.sort);
  }
}
