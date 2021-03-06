import { Component, Input, OnInit, ChangeDetectionStrategy } from '@angular/core';
import {
  trigger,
  state,
  style,
  transition,
  animate
} from '@angular/animations';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

  isShow: boolean;
  title = '标题';
  constructor() { }

  ngOnInit() {
  }

  show() {
    this.isShow = true;
    this.title = '测试';
  }

}
