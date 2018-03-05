import { Component, OnInit, OnChanges, Input, SimpleChange } from '@angular/core';

@Component({
  selector: 'app-changtest',
  templateUrl: './changtest.component.html',
  styleUrls: ['./changtest.component.css']
})
export class ChangtestComponent implements OnInit, OnChanges {

  @Input() major: number;
  @Input() minor: number;
  @Input() person: any;
  changeLog: string[] = [];
  ngOnInit() {
  }
  ngOnChanges(changes) {
    const log: string[] = [];
    // tslint:disable-next-line:forin
    for (const propName in changes) {
      const changedProp = changes[propName];
      const to = JSON.stringify(changedProp.currentValue);
      if (changedProp.isFirstChange()) {
        log.push(`Initial value of ${propName} set to ${to}`);
      } else {
        const from = JSON.stringify(changedProp.previousValue);
        log.push(`${propName} changed from ${from} to ${to}`);
      }
    }
    this.changeLog.push(log.join(', '));
  }

}
