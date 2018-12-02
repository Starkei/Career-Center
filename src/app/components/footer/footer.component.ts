import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  titles = [];

  constructor() {
    this.titles.push({
      name: 'Opening hours',
      content: [
        'Monday: 10.00 - 18.00',
        'Tuesday: 10.00 - 18.00',
        'Wednesday: 10.00 - 18.00',
        'Thursday: 10.00 - 18.00',
        'Friday: 10.00 - 18.00',
        'Saturday: 10.00 - 18.00',
        'Sunday: 10.00 - 18.00'
      ]
    });
    this.titles.push({
      name: 'Menu',
      content: [
        'Main',
        'Contact us',
        'Consultation list'
      ]
    });
    this.titles.push({
      name: 'Location',
      content: [
        'Country: Belarus',
        'City: Minsk',
        'Street: Kukushkina 96, house Kolotushkina',
      ]
    });
    this.titles.push({
      name: 'Contacts',
      content: [
        'Email: givemeyourmoney@soap.by',
        'Phone number: +375 44 777 89 00',
        'Phone number: +375 29 777 88 00',
        'Phone number: +375 23 777 87 00',
      ]
    });
  }

  ngOnInit() {
  }

}
