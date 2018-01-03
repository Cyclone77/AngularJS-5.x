import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-dy2',
  templateUrl: './dy2.component.html',
  styleUrls: ['./dy2.component.css']
})
export class Dy2Component implements OnInit {

  @Input() name: string;
  @Input() template1: any;
  @Input() template2: any;

  constructor() { }

  ngOnInit() {
  }

}
