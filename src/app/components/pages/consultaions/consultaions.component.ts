import { Component, OnInit } from '@angular/core';
import { Slide } from 'src/app/animations/slide';
import { ConsultationService } from 'src/app/services/consultations/consultation.service';

@Component({
  selector: 'app-consultaions',
  templateUrl: './consultaions.component.html',
  styleUrls: ['./consultaions.component.scss'],
  animations: [Slide]
})
export class ConsultaionsComponent implements OnInit {

  datasource: any[];
  test = false

  constructor(private service: ConsultationService) {
  }

  visible: boolean = true;

  ngOnInit() {
    this.getAll();
  }

  getAll(){
    this.service.getAll().subscribe(data => this.datasource = data);
  }

}
