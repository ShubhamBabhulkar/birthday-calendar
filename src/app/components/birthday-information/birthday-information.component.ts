import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-birthday-information',
  templateUrl: './birthday-information.component.html',
  styleUrls: ['./birthday-information.component.scss']
})
export class BirthdayInformationComponent implements OnInit {
  @Input('birthdays') birthdays;
  daysInWeek = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'];
  constructor() {
  }

  ngOnInit() {
  }
  ngOnChanges() {
    console.log('this.birthday', this.birthdays);
  }

}
