import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {

  days: number = 31;

  constructor() { }

  ngOnInit() {
  }

  leap():number{
    let date = (new Date(Date.now())).getFullYear();
    if (date % 4 == 0)
      return 28;
    else 
      if (date % 100 != 0) 
        return 29;
    else 
      if (date % 400 != 0)
        return 28;
    else 
      return 29; 
  }

}
