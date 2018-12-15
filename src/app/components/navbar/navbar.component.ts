import { Component, OnInit } from "@angular/core";
import { BreakpointObserver, Breakpoints } from "@angular/cdk/layout";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { DropDown } from "src/app/animations/drop-down";
import { trigger, transition, useAnimation } from "@angular/animations";
import { rubberBand } from "ng-animate";
import { Link } from "src/app/models/link";
import { UserRoleService } from "src/app/services/userRole/user-role.service";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.scss"],
  animations: [
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
export class NavbarComponent implements OnInit {
  logoHasClicked: boolean = false;

  links: Link[] = [
    new Link("main", "Main", false),
    new Link("contact", "Contact us", false),
    new Link("consultaions", "Consultations", false),
    new Link("admin", "Admin panel", false)
  ];

  handSet: Observable<Boolean>;

  constructor(
    private breakPoints: BreakpointObserver,
    private user: UserRoleService
  ) {
    this.handSet = this.breakPoints
      .observe(Breakpoints.Handset)
      .pipe(map(result => result.matches));
  }

  clicked(index: number) {
    this.links[index].isClicked = !this.links[index].isClicked;
  }

  ngOnInit() {
    this.logoHasClicked = false;
  }
}
