import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  input2 = '123';
  value = '222';
  label = '123';

  setInputData(text) {
    this.label = text;
    this.value = '5555';
  }

  textChange(val) {
    // this.label = val;
  }
}
