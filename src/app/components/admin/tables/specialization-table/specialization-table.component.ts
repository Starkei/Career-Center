import { Component, OnInit, ViewChild } from "@angular/core";
import { MatPaginator, MatSort, MatDialog } from "@angular/material";
import { SpecializationTableDataSource } from "./specialization-table-datasource";
import { Slide } from "src/app/animations/slide";
import { SpecializationService } from "src/app/services/specialization/specialization.service";
import { AddToSpecializationsComponent } from "src/app/dialogs/admin/add-to-specializations/add-to-specializations.component";

@Component({
  selector: "app-specialization-table",
  templateUrl: "./specialization-table.component.html",
  styleUrls: ["./specialization-table.component.scss"],
  animations: [Slide]
})
export class SpecializationTableComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource: SpecializationTableDataSource;

  displayedColumns = ["name"];

  constructor(
    private service: SpecializationService,
    private dialog: MatDialog
  ) {}

  ngOnInit() {
    this.dataSource = new SpecializationTableDataSource(
      [],
      this.paginator,
      this.sort
    );
    this.service
      .getAll()
      .subscribe(
        data =>
          (this.dataSource = new SpecializationTableDataSource(
            data,
            this.paginator,
            this.sort
          ))
      );
  }

  addSpecialization() {
    let ref = this.dialog.open(AddToSpecializationsComponent);
  }
}
