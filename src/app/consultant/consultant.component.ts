import { Component, OnInit } from '@angular/core';
import { ReviewService } from '../services/review/review.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { EmployeeService } from '../services/employee/employee.service';

@Component({
  selector: 'app-consultant',
  templateUrl: './consultant.component.html',
  styleUrls: ['./consultant.component.scss']
})
export class ConsultantComponent implements OnInit {

  consultantId: number;
  consultant: any;
  reviews: any[] = [];

  constructor(
    private service: ReviewService,
    private employeeService: EmployeeService,
    private route: ActivatedRoute)
    { }

  ngOnInit() {
    this.route.params.subscribe(params => this.consultantId = params['id']);
    this.employeeService.getById(this.consultantId).subscribe(data => {this.consultant = data[0]; console.log(this.consultant);});
    this.service.getReviewByConsultantId(this.consultantId).subscribe(data => {this.reviews = data; console.log(this.reviews);});
  }

}
