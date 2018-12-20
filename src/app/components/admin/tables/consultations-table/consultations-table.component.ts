import { Component, OnInit, ViewChild } from "@angular/core";
import { MatPaginator, MatSort, MatDialog } from "@angular/material";
import { ConsultationsTableDataSource } from "./consultations-table-datasource";
import { Slide } from "src/app/animations/slide";
import { ConsultationService } from "src/app/services/consultations/consultation.service";
import { AddToConsultationsComponent } from "src/app/dialogs/admin/add-to-consultations/add-to-consultations.component";
import { SelectionModel } from "@angular/cdk/collections";

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
  selection = new SelectionModel<any>(true, []);

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = [
    "select",
    "emoloyee",
    "user",
    "price",
    "date",
    "title",
    "room"
  ];
  load: any = {
    id: 0,
    employee: "1",
    user: { fullName: "1" },
    title: "",
    date: new Date(),
    price: 0,
    room: 0
  };

  constructor(
    private service: ConsultationService,
    private dialog: MatDialog
  ) {}

  ngOnInit() {
    this.dataSource = new ConsultationsTableDataSource(
      [this.load],
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
    ref
      .afterClosed()
      .subscribe(() =>
        this.service
          .getAll()
          .subscribe(
            data =>
              (this.dataSource = new ConsultationsTableDataSource(
                data,
                this.paginator,
                this.sort
              ))
          )
      );
  }

  deleteConsultations() {
    this.service.remove(this.selection.selected).subscribe(() => {
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
    });
  }

  getEmployee(row: any): string {
    if (row.user) return row.user.fullName;
    return "Empty";
  }

  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected()
      ? this.selection.clear()
      : this.dataSource.data.forEach(row => this.selection.select(row));
  }

  createReportDocx() {
    alert("Sended Docx");
    this.service.sendToDocx();
  }

  createReportExcel() {
    alert("Sended Excel");
    this.service.sendToExcel();
  }

  createReports() {
    alert("Sended ALL");
    this.service.sendToAll();
  }
}
