import { MatcomponentModule } from './models/matcomponent/matcomponent.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { TopBarComponent } from './components/top-bar/top-bar.component';
import { HttpClientModule } from '@angular/common/http';
import { NewsDashboarComponent } from './components/news-dashboar/news-dashboar.component';
import { BirthdayCalendarComponent } from './components/birthday-calendar/birthday-calendar.component';
import { BirthdayInformationComponent } from './components/birthday-information/birthday-information.component';
import { GetInitialsPipe } from './pipes/get-initials.pipe';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    NewsDashboarComponent,
    BirthdayCalendarComponent,
    BirthdayInformationComponent,
    GetInitialsPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatcomponentModule
  ],
  providers: [TopBarComponent],
  bootstrap: [AppComponent],
  entryComponents: []
})
export class AppModule { }
