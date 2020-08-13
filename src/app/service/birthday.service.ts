import { Injectable } from '@angular/core';
import * as _ from 'lodash';

@Injectable({
  providedIn: 'root'
})
export class BirthdayService {

  constructor() { }

  getBirthdayDates = (year, jsonData) => {
    return  _.filter(jsonData, function(years) {
       return years.birthday.includes(year);
    });
  }
}
