import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-month',
  templateUrl: './month.component.html',
  styleUrls: ['./month.component.scss']
})
export class MonthComponent implements OnInit {

  @Input() days: number = 1;

  days_array: Array<number> = [];

  constructor() {
    this.days_array = new Array<number>(this.days);
    for(let i = 0; i < this.days; i++)
      this.days_array[i] = i + 1;
   }

  ngOnInit() {
    this.days_array = new Array<number>(this.days);
    for(let i = 0; i < this.days; i++)
      this.days_array[i] = i + 1;
  }

}
