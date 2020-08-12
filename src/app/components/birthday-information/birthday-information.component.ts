import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-birthday-information',
  templateUrl: './birthday-information.component.html',
  styleUrls: ['./birthday-information.component.scss']
})
export class BirthdayInformationComponent implements OnInit {
  @Input('birthday') birthday;

  constructor() { }

  ngOnInit() {
  }

}
