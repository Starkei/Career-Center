import { Component, OnInit } from "@angular/core";
import { Slide } from "src/app/animations/slide";
import { ConsultationService } from "src/app/services/consultations/consultation.service";
import { trigger, transition, useAnimation } from "@angular/animations";
import { flipInX, rubberBand } from "ng-animate";
import { DataSource } from "src/app/models/data-source";
import { Router } from "@angular/router";
import { UserRoleService } from "src/app/services/userRole/user-role.service";

@Component({
  selector: "app-consultaions",
  templateUrl: "./consultaions.component.html",
  styleUrls: ["./consultaions.component.scss"],
  animations: [
    Slide,

    trigger("flipInX", [
      transition(
        ":enter",
        useAnimation(flipInX, {
          params: { timing: 2 }
        })
      )
    ]),

    trigger("rubberBand", [
      transition(
        "on <=> in",
        useAnimation(rubberBand, {
          params: { timing: 1 }
        })
      )
    ])
  ]
})
export class ConsultaionsComponent implements OnInit {
  datasource: DataSource[] = [];
  test = false;
  date: Date = new Date(Date.now());

  constructor(
    private service: ConsultationService,
    private user: UserRoleService,
    private router: Router
  ) {}

  visible: boolean = true;

  ngOnInit() {
    this.getAll();
  }

  getAll() {
    this.service.getByDate(new Date(Date.now())).subscribe(data => {
      for (let i = 0; i < data.length; i++)
        this.datasource.push(new DataSource(data[i], false));
    });
  }

  navigate(consultant: any) {
    consultant.isClicked = !consultant.isClicked;
    setTimeout(
      () =>
        this.router.navigate([
          "",
          { outlets: { navbar: ["consultant", consultant.data.employee.id] } }
        ]),
      800
    );
  }

  selectByDate() {
    this.datasource = [];
    this.service.getByDate(this.date).subscribe(data => {
      console.log(data);
      for (let i = 0; i < data.length; i++)
        this.datasource.push(new DataSource(data[i], false));
    });
  }

  selectNearDate() {
    this.datasource = [];
    this.service.getNearDate().subscribe(data => {
      console.log(data);
      for (let i = 0; i < data.length; i++)
        this.datasource.push(new DataSource(data[i], false));
    });
  }

  getAllFree() {
    this.datasource = [];
    this.service.getAllFree().subscribe(data => {
      for (let i = 0; i < data.length; i++)
        this.datasource.push(new DataSource(data[i], false));
    });
  }

  getPath(path) {
    if (path.data.employee.image)
      return "http://localhost:8080/images/" + path.data.employee.image;
    return "";
  }

  writeUser(dataSource: any) {
    this.service
      .writeUser(this.user.getCurrentUser(), dataSource.data)
      .subscribe(data => {
        alert("update!");
        this.datasource = [];
        this.service.getAllFree().subscribe(data => {
          for (let i = 0; i < data.length; i++)
            this.datasource.push(new DataSource(data[i], false));
        });
      });
  }
}
