import { Component, OnInit } from '@angular/core';
import { ReviewService } from '../services/review/review.service';

@Component({
  selector: 'app-consultant',
  templateUrl: './consultant.component.html',
  styleUrls: ['./consultant.component.scss']
})
export class ConsultantComponent implements OnInit {

  consultant: any;
  reviews: any[] = [];

  constructor(private service: ReviewService) { }

  ngOnInit() {
    this.service.getReviewForConsultant(this.consultant).subscribe(data => this.reviews = data);
  }

}
