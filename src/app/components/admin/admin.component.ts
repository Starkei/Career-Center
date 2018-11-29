import { Component, OnInit } from '@angular/core';
import { AddToRolesComponent } from 'src/app/dialogs/admin/add-to-roles/add-to-roles.component';
import { MatDialog } from '@angular/material';
import { AddToConsultationsComponent } from 'src/app/dialogs/admin/add-to-consultations/add-to-consultations.component';
import { AddToEmployeesComponent } from 'src/app/dialogs/admin/add-to-employees/add-to-employees.component';
import { AddToReviewsComponent } from 'src/app/dialogs/admin/add-to-reviews/add-to-reviews.component';
import { AddToSpecializationsComponent } from 'src/app/dialogs/admin/add-to-specializations/add-to-specializations.component';
import { AddToSpecializationsOfEmployeesComponent } from 'src/app/dialogs/admin/add-to-specializations-of-employees/add-to-specializations-of-employees.component';
import { AddToUsersComponent } from 'src/app/dialogs/admin/add-to-users/add-to-users.component';
import { AddToUsersRolesComponent } from 'src/app/dialogs/admin/add-to-users-roles/add-to-users-roles.component';
import { Slide } from 'src/app/animations/slide';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
  animations: [Slide]
})
export class AdminComponent implements OnInit {

  links = [
    {path: 'consultaions', title: 'Consultations'},
    {path: 'employees', title: 'Employees'},
    {path: 'reviews', title: 'Reviews'},
    {path: 'roles', title: 'Roles'},
    {path: 'specializations',title: 'Specializations'},
    {path: 'specializationsOfEmployees', title: 'Specializations of employees'},
    {path: 'users', title: 'Users'},
    {path: 'usersRoles',title: 'Users roles'},
  ];

  constructor(private dialog: MatDialog) { }

  ngOnInit() {
  }

  showConsultationAddDialog(){
    let dialogRef = this.dialog.open(AddToConsultationsComponent);
  }

  showEmployeeAddDialog(){
    let dialogRef = this.dialog.open(AddToEmployeesComponent);
  }

  showReviewAddDialog(){
    let dialogRef = this.dialog.open(AddToReviewsComponent);
  }

  showRoleAddDialog(){
    let dialogRef = this.dialog.open(AddToRolesComponent);
  }

  showSpecializationAddDialog(){
    let dialogRef = this.dialog.open(AddToSpecializationsComponent);
  }

  showSpecializationOfEmployeeAddDialog(){
    let dialogRef = this.dialog.open(AddToSpecializationsOfEmployeesComponent);
  }

  showUserAddDialog(){
    let dialogRef = this.dialog.open(AddToUsersComponent);
  }

  showUserRoleAddDialog(){
    let dialogRef = this.dialog.open(AddToUsersRolesComponent);
  }

}
