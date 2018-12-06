import { Component, OnInit } from '@angular/core';
import { ConsultationService } from 'src/app/services/consultations/consultation.service';

@Component({
  selector: 'app-best-of-five',
  templateUrl: './best-of-five.component.html',
  styleUrls: ['./best-of-five.component.scss']
})
export class BestOfFiveComponent implements OnInit {

  data: any[] = [];

  constructor(private service: ConsultationService) { }

  ngOnInit() {
    this.service.getBestFive().subscribe(data => this.data = data);
  }

}
