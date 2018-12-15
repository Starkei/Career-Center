import { Component, OnInit } from "@angular/core";
import { ReviewService } from "../services/review/review.service";
import { ActivatedRoute, ParamMap } from "@angular/router";
import { EmployeeService } from "../services/employee/employee.service";
import { UserRoleService } from "../services/userRole/user-role.service";
import { trigger, transition, useAnimation } from "@angular/animations";
import { bounceInLeft } from "ng-animate";

@Component({
  selector: "app-consultant",
  templateUrl: "./consultant.component.html",
  styleUrls: ["./consultant.component.scss"],
  animations: [
    trigger("bounceInLeft", [
      transition(
        ":enter",
        useAnimation(bounceInLeft, {
          params: { timing: 2 }
        })
      )
    ])
  ]
})
export class ConsultantComponent implements OnInit {
  consultantId: number;
  consultant: any;
  reviews: any[] = [];
  text: string = "";

  constructor(
    private service: ReviewService,
    private employeeService: EmployeeService,
    private user: UserRoleService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => (this.consultantId = params["id"]));
    this.employeeService.getById(this.consultantId).subscribe(data => {
      this.consultant = data[0];
      console.log(this.consultant);
    });
    this.service.getReviewByConsultantId(this.consultantId).subscribe(data => {
      this.reviews = data;
      console.log(this.reviews);
    });
  }

  sendReview() {
    this.service
      .addReview({
        text: this.text,
        userId: this.user.getCurrentUser().user.id,
        employeeId: this.consultant.id
      })
      .subscribe(data => (this.reviews = data));
  }
}
