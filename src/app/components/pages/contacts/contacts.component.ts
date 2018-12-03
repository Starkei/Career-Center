import { Component, OnInit } from '@angular/core';
import { SwimmingOutRight } from 'src/app/animations/swimming-out-right';
import { SwimmingOutLeft } from 'src/app/animations/swimming-out-left';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss'],
  animations: [
    SwimmingOutLeft,
    SwimmingOutRight
  ]
})
export class ContactsComponent implements OnInit {

  lat: number = 51.678418;
  lng: number = 7.809007;


  constructor() { }

  ngOnInit() {
  }

}
