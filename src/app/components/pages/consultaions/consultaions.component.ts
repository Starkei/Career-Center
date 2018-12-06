import { Component, OnInit } from '@angular/core';
import { Slide } from 'src/app/animations/slide';
import { ConsultationService } from 'src/app/services/consultations/consultation.service';
import { trigger, transition, useAnimation } from '@angular/animations';
import { flipInX, rubberBand } from 'ng-animate';
import { DataSource } from 'src/app/models/data-source';

@Component({
  selector: 'app-consultaions',
  templateUrl: './consultaions.component.html',
  styleUrls: ['./consultaions.component.scss'],
  animations: [Slide,

    trigger('flipInX', [transition(':enter', useAnimation(flipInX, {
      params: { timing: 2 }
    }))]),

    trigger('rubberBand', [
      transition('on <=> in', useAnimation(rubberBand, {
        params: { timing: 1 }
      }))
    ])
  ]
})

export class ConsultaionsComponent implements OnInit {

  datasource: DataSource[] = [];
  test = false;

  constructor(private service: ConsultationService) {
  }

  visible: boolean = true;

  ngOnInit() {
    this.getAll();
  }

  getAll(){
    this.service.getAllFree().subscribe(data => {
        for(let i = 0; i < data.length; i++)
          this.datasource.push(new DataSource(data[i], false));
      }
    );
  }

}
