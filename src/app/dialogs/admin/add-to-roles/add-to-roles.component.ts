import { Component, OnInit } from '@angular/core';
import { RoleService } from 'src/app/services/role/role.service';

@Component({
  selector: 'app-add-to-roles',
  templateUrl: './add-to-roles.component.html',
  styleUrls: ['./add-to-roles.component.scss']
})
export class AddToRolesComponent implements OnInit {

  roleName: string = "";

  constructor(private roleService: RoleService) { }

  ngOnInit() {
  }

  sendRole(){
    this.roleService.add({
      name: this.roleName
    });
    this.roleName = "";
  }

}
