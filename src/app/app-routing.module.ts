import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecordsComponent } from './components/records/records.component';
import { CalendarComponent } from './componets/calendar/calendar.component';

const routes: Routes = [
  { path: '', component: RecordsComponent},
  { path: 'records', component: RecordsComponent},
  {path: 'calendar', component: CalendarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
