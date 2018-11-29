import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './components/pages/main/main.component';
import { ContactsComponent } from './components/pages/contacts/contacts.component';
import { ConsultaionsComponent } from './components/pages/consultaions/consultaions.component';
import { AdminComponent } from './components/admin/admin.component';

const routes: Routes = [
    {path: 'main', component: MainComponent},
    {path: 'contact', component: ContactsComponent},
    {path: 'consultaions', component: ConsultaionsComponent},
    {path: 'admin', component: AdminComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
