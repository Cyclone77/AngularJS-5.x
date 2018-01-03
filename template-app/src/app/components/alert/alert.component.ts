import { Component, Input, OnInit, ContentChild, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent implements OnInit {

  @ContentChild('left') leftTmp: TemplateRef<any>;
  @ContentChild('right') rightTmp: TemplateRef<any>;

  @Input() leftwidth: number;
  constructor() { }

  ngOnInit() {
  }

}
