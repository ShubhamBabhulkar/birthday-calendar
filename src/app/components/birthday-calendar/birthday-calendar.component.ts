import { BirthdayService } from './../../service/birthday.service';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-birthday-calendar',
  templateUrl: './birthday-calendar.component.html',
  styleUrls: ['./birthday-calendar.component.scss']
})
export class BirthdayCalendarComponent implements OnInit {
  allBirthday: any;

  constructor(
    private birthdayService: BirthdayService,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit() {
    this.getBirthdayDates(2017);
  }

  getBirthdayDates = (year) => {
    this.allBirthday = [];
    this.allBirthday  = this.birthdayService.getBirthdayDates(year);
    console.log('this.allBirthday', this.allBirthday);
  }
}
