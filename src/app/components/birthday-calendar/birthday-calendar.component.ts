import { BirthdayService } from './../../service/birthday.service';
import { Component, OnInit, ViewChild } from '@angular/core';
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
  prevData: any;
  constructor(
    private birthdayService: BirthdayService,
  ) { }

  ngOnInit() {
    this.yearForm = new FormGroup({
      year: new FormControl(null, [Validators.required]),
      jsonData: new FormControl(null, [Validators.required])
    });
  }

  getBirthdayDates = (forBirthday) => {
    if (this.prevData !== forBirthday) {
    this.prevData = forBirthday;
    this.allBirthday  = this.birthdayService.getBirthdayDates(forBirthday.year, JSON.parse(forBirthday.jsonData));
    this.getDay(this.allBirthday);
  } else {
    this.yearForm.reset();
    this.birthdays = '';
  }
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
    });
    this.birthdays = _.groupBy(birthData, 'day');
    _.sortBy(this.birthdays, ['name', 'birthday']);
  }
}
