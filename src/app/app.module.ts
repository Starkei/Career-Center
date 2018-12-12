import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { LayoutModule } from "@angular/cdk/layout";
import {
  MatToolbarModule,
  MatButtonModule,
  MatSidenavModule,
  MatIconModule,
  MatListModule,
  MatTableModule,
  MatPaginatorModule,
  MatSortModule,
  MatDialogModule,
  MatFormFieldModule,
  MatInputModule,
  MatMenuModule,
  MatExpansionModule,
  MatDividerModule,
  MatDatepickerModule
} from "@angular/material";
import { MatCardModule } from "@angular/material/card";
import { MatTabsModule } from "@angular/material/tabs";
import { MatRippleModule, MatNativeDateModule } from "@angular/material/core";
import { MatGridListModule } from "@angular/material/grid-list";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { MainComponent } from "./components/pages/main/main.component";
import { ContactsComponent } from "./components/pages/contacts/contacts.component";
import { ConsultaionsComponent } from "./components/pages/consultaions/consultaions.component";
import { ConsultationService } from "./services/consultations/consultation.service";
import { HttpClientModule } from "@angular/common/http";
import { FlexLayoutModule } from "@angular/flex-layout";
import { AddToRolesComponent } from "./dialogs/admin/add-to-roles/add-to-roles.component";
import { AdminComponent } from "./components/admin/admin.component";
import { RoleService } from "./services/role/role.service";
import { AddToConsultationsComponent } from "./dialogs/admin/add-to-consultations/add-to-consultations.component";
import { AddToEmployeesComponent } from "./dialogs/admin/add-to-employees/add-to-employees.component";
import { AddToReviewsComponent } from "./dialogs/admin/add-to-reviews/add-to-reviews.component";
import { AddToSpecializationsComponent } from "./dialogs/admin/add-to-specializations/add-to-specializations.component";
import { AddToSpecializationsOfEmployeesComponent } from "./dialogs/admin/add-to-specializations-of-employees/add-to-specializations-of-employees.component";
import { AddToUsersComponent } from "./dialogs/admin/add-to-users/add-to-users.component";
import { AddToUsersRolesComponent } from "./dialogs/admin/add-to-users-roles/add-to-users-roles.component";
import { EmployeeService } from "./services/employee/employee.service";
import { ReviewService } from "./services/review/review.service";
import { SpecializationService } from "./services/specialization/specialization.service";
import { SpecializationOfEmployeeService } from "./services/specializationOfEmployee/specialization-of-employee.service";
import { UserRoleService } from "./services/userRole/user-role.service";
import { UserService } from "./services/user/user.service";
import { ConsultationsTableComponent } from "./components/admin/tables/consultations-table/consultations-table.component";
import { EmployeeTableComponent } from "./components/admin/tables/employee-table/employee-table.component";
import { ReviewTableComponent } from "./components/admin/tables/review-table/review-table.component";
import { RoleTableComponent } from "./components/admin/tables/role-table/role-table.component";
import { SpecializationTableComponent } from "./components/admin/tables/specialization-table/specialization-table.component";
import { SpecializationOfEmployeeTableComponent } from "./components/admin/tables/specialization-of-employee-table/specialization-of-employee-table.component";
import { UserTableComponent } from "./components/admin/tables/user-table/user-table.component";
import { UserRoleTableComponent } from "./components/admin/tables/user-role-table/user-role-table.component";
import { FooterComponent } from "./components/footer/footer.component";
import { AgmCoreModule } from "@agm/core";
import { BestOfFiveComponent } from "./components/pages/best-of-five/best-of-five.component";
import { UserProfileComponent } from "./components/user-profile/user-profile.component";
import { PersonalAreaComponent } from "./components/pages/personal-area/personal-area.component";
import { LoginComponent } from "./dialogs/login/login.component";
import { RegistrationComponent } from "./dialogs/registration/registration.component";
import { ConsultantComponent } from "./consultant/consultant.component";
import { JwtModule } from "@auth0/angular-jwt";
import { AuthGuard } from "./guards/auth.guard";

export function tokenGetter() {
  return localStorage.getItem("token");
}

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
    ConsultationsTableComponent,
    EmployeeTableComponent,
    ReviewTableComponent,
    RoleTableComponent,
    SpecializationTableComponent,
    SpecializationOfEmployeeTableComponent,
    UserTableComponent,
    UserRoleTableComponent,
    FooterComponent,
    BestOfFiveComponent,
    UserProfileComponent,
    PersonalAreaComponent,
    LoginComponent,
    RegistrationComponent,
    ConsultantComponent
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
    MatDividerModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatCardModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatTabsModule,
    MatDialogModule,
    MatExpansionModule,
    MatGridListModule,
    MatRippleModule,
    MatMenuModule,
    HttpClientModule,
    MatInputModule,
    MatFormFieldModule,
    FlexLayoutModule,
    AgmCoreModule.forRoot({
      apiKey: "AIzaSyCWY8fA-pKpybggGwNR583xVZERT75T3eQ"
    }),
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        whitelistedDomains: ["localhost:4000"],
        blacklistedRoutes: ["localhost:4000/usersRoles/logIn"]
      }
    })
  ],
  providers: [
    ConsultationService,
    RoleService,
    EmployeeService,
    ReviewService,
    SpecializationService,
    SpecializationOfEmployeeService,
    UserRoleService,
    UserService,
    AuthGuard
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
    AddToUsersRolesComponent,
    LoginComponent,
    RegistrationComponent
  ]
})
export class AppModule {}
