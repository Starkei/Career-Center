import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './components/pages/main/main.component';
import { ContactsComponent } from './components/pages/contacts/contacts.component';
import { ConsultaionsComponent } from './components/pages/consultaions/consultaions.component';
import { AdminComponent } from './components/admin/admin.component';
import { ConsultationsTableComponent } from './components/admin/tables/consultations-table/consultations-table.component';
import { EmployeeTableComponent } from './components/admin/tables/employee-table/employee-table.component';
import { ReviewTableComponent } from './components/admin/tables/review-table/review-table.component';
import { RoleTableComponent } from './components/admin/tables/role-table/role-table.component';
import { SpecializationTableComponent } from './components/admin/tables/specialization-table/specialization-table.component';
import { SpecializationOfEmployeeTableComponent } from './components/admin/tables/specialization-of-employee-table/specialization-of-employee-table.component';
import { UserTableComponent } from './components/admin/tables/user-table/user-table.component';
import { UserRoleTableComponent } from './components/admin/tables/user-role-table/user-role-table.component';
import { PersonalAreaComponent } from './components/pages/personal-area/personal-area.component';

const routes: Routes = [
    {path: '',redirectTo: '/(navbar:main)', pathMatch: 'full'},
    {path: 'main', component: MainComponent, outlet: 'navbar'},
    {path: 'contact', component: ContactsComponent, outlet: 'navbar'},
    {path: 'consultaions', component: ConsultaionsComponent, outlet: 'navbar'},
    {path: 'personalArea', component: PersonalAreaComponent, outlet: 'navbar'},
    {path: 'admin', component: AdminComponent, outlet: 'navbar', children: [
      {path: '',redirectTo: '/(navbar:admin/(admin:consultaions))', pathMatch: 'full'},
      {path: 'consultaions', component: ConsultationsTableComponent, outlet: 'admin'},
      {path: 'employees', component: EmployeeTableComponent, outlet: 'admin'},
      {path: 'reviews', component: ReviewTableComponent, outlet: 'admin'},
      {path: 'roles', component: RoleTableComponent, outlet: 'admin'},
      {path: 'specializations', component: SpecializationTableComponent, outlet: 'admin'},
      {path: 'specializationsOfEmployees', component: SpecializationOfEmployeeTableComponent, outlet: 'admin'},
      {path: 'users', component: UserTableComponent, outlet: 'admin'},
      {path: 'usersRoles', component: UserRoleTableComponent, outlet: 'admin'},
    ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
