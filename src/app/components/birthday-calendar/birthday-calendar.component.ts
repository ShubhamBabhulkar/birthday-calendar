import { BirthdayService } from './../../service/birthday.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import * as _ from 'lodash';

@Component({
  selector: 'app-birthday-calendar',
  templateUrl: './birthday-calendar.component.html',
  styleUrls: ['./birthday-calendar.component.scss']
})
export class BirthdayCalendarComponent implements OnInit {
  @ViewChild('vform', { static: true }) validationForm: FormGroup;
  yearForm: FormGroup;
  allBirthday: any;
  jsonData: any;
  birthdays: any;
  bgColors = ['#124276', '#26EE6C', '#CF8BAC', '#ACB0EC', '#EA1E9D', '#7E62DD', '#DF44BE', '#189DCF', '#E85743'];
  constructor(
    private birthdayService: BirthdayService,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit() {
    this.yearForm = new FormGroup({
      year: new FormControl(null, [Validators.required]),
    });
  }

  getBirthdayDates = (year) => {
    this.allBirthday = [];
    this.allBirthday  = this.birthdayService.getBirthdayDates(year.year);
    this.jsonData = JSON.stringify(JSON.parse(JSON.stringify(this.allBirthday)));
    this.getDay(this.allBirthday);
  }

  getDay = (birthData) => {
    const weekday = new Array(7);
    weekday[0] = 'SUN';
    weekday[1] = 'MON';
    weekday[2] = 'TUE';
    weekday[3] = 'WED';
    weekday[4] = 'THU';
    weekday[5] = 'FRI';
    weekday[6] = 'SAT';
    _.map(birthData, (date, index) => {
      const newDate = new Date(date.birthday);
      const day = weekday[newDate.getDay()];
      date.day = day;
      date.bgColor = this.bgColors[index];
    });
    this.birthdays = _.groupBy(birthData, 'day');
    console.log('group', this.birthdays);
  }
}
