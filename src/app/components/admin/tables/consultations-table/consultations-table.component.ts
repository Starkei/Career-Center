import { Component, OnInit, ViewChild } from "@angular/core";
import { MatPaginator, MatSort, MatDialog } from "@angular/material";
import { ConsultationsTableDataSource } from "./consultations-table-datasource";
import { Slide } from "src/app/animations/slide";
import { ConsultationService } from "src/app/services/consultations/consultation.service";
import { AddToConsultationsComponent } from "src/app/dialogs/admin/add-to-consultations/add-to-consultations.component";

@Component({
  selector: "app-consultations-table",
  templateUrl: "./consultations-table.component.html",
  styleUrls: ["./consultations-table.component.scss"],
  animations: [Slide]
})
export class ConsultationsTableComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource: ConsultationsTableDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ["emoloyee", "user", "price", "date", "title", "room"];

  constructor(
    private service: ConsultationService,
    private dialog: MatDialog
  ) {}

  ngOnInit() {
    this.dataSource = new ConsultationsTableDataSource(
      [],
      this.paginator,
      this.sort
    );

    this.service
      .getAll()
      .subscribe(
        data =>
          (this.dataSource = new ConsultationsTableDataSource(
            data,
            this.paginator,
            this.sort
          ))
      );
  }

  addConsultation() {
    let ref = this.dialog.open(AddToConsultationsComponent);
  }

  getEmployee(row: any): string {
    if (row.user) return row.user.fullName;
    return "Empty";
  }
}
