import { BirthdayCalendarComponent } from './components/birthday-calendar/birthday-calendar.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewsDashboarComponent } from './components/news-dashboar/news-dashboar.component';


const routes: Routes = [
 { path: '', component: BirthdayCalendarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
