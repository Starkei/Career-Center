import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-to-roles',
  templateUrl: './add-to-roles.component.html',
  styleUrls: ['./add-to-roles.component.scss']
})
export class AddToRolesComponent implements OnInit {

  roleName: string = "";

  constructor() { }

  ngOnInit() {
  }

  sendRole(){

  }

}
