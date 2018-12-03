import { Component, OnInit } from '@angular/core';
import { SwimmingOutLeft } from 'src/app/animations/swimming-out-left';
import { SwimmingOutRight } from 'src/app/animations/swimming-out-right';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  animations: [
    SwimmingOutLeft,
    SwimmingOutRight
  ]
})
export class MainComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
