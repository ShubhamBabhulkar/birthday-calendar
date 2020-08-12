import { Injectable } from '@angular/core';
declare var require: any;
const birthdatDaya = require('../models/birthdays.json');

@Injectable({
  providedIn: 'root'
})
export class BirthdayService {

  constructor() { }

  getBirthdayDates = (year) => {
    return birthdatDaya;
  }
}
