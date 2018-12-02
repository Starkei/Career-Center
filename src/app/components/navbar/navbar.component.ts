import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { DropDown } from 'src/app/animations/drop-down';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {

  links = [
    {path: 'main', title: 'Main'},
    {path: 'contact', title: 'Contact us'},
    {path: 'consultaions', title: 'Consultaions list'},
    {path: 'admin', title: 'Admin panel'}
  ]



  handSet: Observable<Boolean>;

  constructor(private breakPoints: BreakpointObserver) {
    this.handSet =  this.breakPoints.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );
  }

  ngOnInit() {
  }

}
