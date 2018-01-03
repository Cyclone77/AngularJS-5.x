import { Component, ViewChild,  ViewContainerRef } from '@angular/core';

import { AlertComponent } from './components/alert/alert.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  @ViewChild('dmroom') dmroom: ViewContainerRef;

  data: Date = new Date();
  customer = 'James';
  leftwidth = 200;

  constructor() {}

}
