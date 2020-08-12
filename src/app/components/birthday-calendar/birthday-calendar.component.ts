import { BirthdayService } from './../../service/birthday.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { FormGroup, FormControl, Validators } from '@angular/forms';

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
    console.log(year);
    this.allBirthday = [];
    this.allBirthday  = this.birthdayService.getBirthdayDates(year.year);
    this.jsonData = JSON.stringify(this.allBirthday);
    console.log('this.allBirthday', this.allBirthday);
  }
}
