import { Component, OnInit, ViewChild } from "@angular/core";
import { MatPaginator, MatSort, MatDialog } from "@angular/material";
import { ReviewTableDataSource } from "./review-table-datasource";
import { Slide } from "src/app/animations/slide";
import { ReviewService } from "src/app/services/review/review.service";
import { AddToReviewsComponent } from "src/app/dialogs/admin/add-to-reviews/add-to-reviews.component";

@Component({
  selector: "app-review-table",
  templateUrl: "./review-table.component.html",
  styleUrls: ["./review-table.component.scss"],
  animations: [Slide]
})
export class ReviewTableComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource: ReviewTableDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ["text", "user", "employee"];

  constructor(private service: ReviewService, private dialog: MatDialog) {}

  ngOnInit() {
    this.dataSource = new ReviewTableDataSource([], this.paginator, this.sort);
    this.service
      .getAll()
      .subscribe(
        data =>
          (this.dataSource = new ReviewTableDataSource(
            data,
            this.paginator,
            this.sort
          ))
      );
  }

  addReview() {
    let ref = this.dialog.open(AddToReviewsComponent);
  }
}
