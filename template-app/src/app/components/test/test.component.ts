import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
    <ng-container *ngTemplateOutlet="greet"></ng-container>
    <hr>
    <ng-container *ngTemplateOutlet="eng; context: myContext"></ng-container>
    <hr>
    <ng-container *ngTemplateOutlet="svk; context: myContext"></ng-container>
    <hr>
    <ng-template #greet><span>Hello</span></ng-template>
    <ng-template #eng let-name><span>Hello {{name}}!</span></ng-template>
    <ng-template #svk let-person="localSk"><span>Ahoj {{person}}!</span></ng-template>
`
})
export class TestComponent implements OnInit {
  myContext = {$implicit: 'World', localSk: 'Svet'};
  constructor() { }

  ngOnInit() {
  }

}