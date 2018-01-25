import { Component } from '@angular/core';
import { MessageService } from './message/message.service';

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

  constructor(
    private _msgService: MessageService
  ) {}

  setInputData(text) {
    this.label = text;
    this.value = '5555';
  }

  textChange(val) {
    // this.label = val;
  }

  showDlg() {
    this._msgService.success('成功了!');
  }
}
