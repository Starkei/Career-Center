import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, MatTableModule, MatPaginatorModule, MatSortModule, MatDialogModule, MatFormFieldModule, MatInputModule } from '@angular/material';
import {MatCardModule} from '@angular/material/card';
import {MatTabsModule} from '@angular/material/tabs';
import {MatRippleModule} from '@angular/material/core';
import {MatGridListModule} from '@angular/material/grid-list';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MainComponent } from './components/pages/main/main.component';
import { ContactsComponent } from './components/pages/contacts/contacts.component';
import { ConsultaionsComponent } from './components/pages/consultaions/consultaions.component';
import { ConsultationService } from './services/consultations/consultation.service';
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AddToRolesComponent } from './dialogs/admin/add-to-roles/add-to-roles.component';
import { AdminComponent } from './components/admin/admin.component';
import { RoleService } from './services/role/role.service';
import { AddToConsultationsComponent } from './dialogs/admin/add-to-consultations/add-to-consultations.component';
import { AddToEmployeesComponent } from './dialogs/admin/add-to-employees/add-to-employees.component';
import { AddToReviewsComponent } from './dialogs/admin/add-to-reviews/add-to-reviews.component';
import { AddToSpecializationsComponent } from './dialogs/admin/add-to-specializations/add-to-specializations.component';
import { AddToSpecializationsOfEmployeesComponent } from './dialogs/admin/add-to-specializations-of-employees/add-to-specializations-of-employees.component';
import { AddToUsersComponent } from './dialogs/admin/add-to-users/add-to-users.component';
import { AddToUsersRolesComponent } from './dialogs/admin/add-to-users-roles/add-to-users-roles.component';
import { EmployeeService } from './services/employee/employee.service';
import { ReviewService } from './services/review/review.service';
import { SpecializationService } from './services/specialization/specialization.service';
import { SpecializationOfEmployeeService } from './services/specializationOfEmployee/specialization-of-employee.service';
import { UserRoleService } from './services/userRole/user-role.service';
import { UserService } from './services/user/user.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MainComponent,
    ContactsComponent,
    ConsultaionsComponent,
    AddToRolesComponent,
    AdminComponent,
    AddToConsultationsComponent,
    AddToEmployeesComponent,
    AddToReviewsComponent,
    AddToSpecializationsComponent,
    AddToSpecializationsOfEmployeesComponent,
    AddToUsersComponent,
    AddToUsersRolesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    FormsModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatTabsModule,
    MatDialogModule,
    MatGridListModule,
    MatRippleModule,
    HttpClientModule,
    MatInputModule,
    MatFormFieldModule,
    FlexLayoutModule,
  ],
  providers: [
    ConsultationService,
    RoleService,
    EmployeeService,
    ReviewService,
    SpecializationService,
    SpecializationOfEmployeeService,
    UserRoleService,
    UserService
  ],
  bootstrap: [AppComponent],
  entryComponents: [
    AddToRolesComponent,
    AddToConsultationsComponent,
    AddToEmployeesComponent,
    AddToReviewsComponent,
    AddToSpecializationsComponent,
    AddToSpecializationsOfEmployeesComponent,
    AddToUsersComponent,
    AddToUsersRolesComponent
  ]
})
export class AppModule { }
