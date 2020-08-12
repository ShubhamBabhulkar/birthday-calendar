import { Injectable } from '@angular/core';
declare var require: any;
const birthdatDaya = require('../models/birthdays.json');
import * as _ from 'lodash';

@Injectable({
  providedIn: 'root'
})
export class BirthdayService {

  constructor() { }

  getBirthdayDates = (year) => {
    return  _.filter(birthdatDaya, function(years) {
       return years.birthday.includes(year);
    });
  }
}
