import { Component, OnInit } from '@angular/core';
import { AddToRolesComponent } from 'src/app/dialogs/admin/add-to-roles/add-to-roles.component';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit() {
  }

  showRoleAddDialog(){
    let dialogRef = this.dialog.open(AddToRolesComponent);
  }

}
