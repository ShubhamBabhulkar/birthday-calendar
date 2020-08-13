import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-birthday-information',
  templateUrl: './birthday-information.component.html',
  styleUrls: ['./birthday-information.component.scss']
})
export class BirthdayInformationComponent implements OnInit {
  @Input('birthdays') birthdays;
  daysInWeek = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'];
  bgColors = ['#124276', '#26EE6C', '#CF8BAC', '#ACB0EC', '#EA1E9D', '#7E62DD', '#DF44BE', '#189DCF', '#E85743'];

  constructor() {
  }

  ngOnInit() {
  }
  ngOnChanges() {
    console.log(this.birthdays);
  }
  getColValue = (birthData) => {
    return birthData.length > 4 ? 3 : 12 / birthData.length;
  }
  getBgColor = (i) => {
    return this.bgColors[i] || '#124276';
  }
  getHeight = (days) => {
    if (days.length !== 1) {
      const row = Math.round(days.length / 4);
      console.log(25 / row);
      return  25 / row +  'vh';
    } else {
      return '25vh';
    }
}
}
