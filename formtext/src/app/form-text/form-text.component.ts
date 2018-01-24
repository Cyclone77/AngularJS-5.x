import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'form-text',
  templateUrl: './form-text.component.html',
  styleUrls: ['./form-text.component.css']
})
export class FormTextComponent implements OnInit {

  @Input() model: string;
  @Output() modelChange = new EventEmitter<any>();

  // 变量+Change = 发射事件
  @Input() label: string;
  @Output() labelChange = new EventEmitter<any>();
  constructor() { }

  ngOnInit() {
  }

  handleInput(val: string): void {
    this.model = val;
    this.modelChange.emit(val);
    // // this.controlChange(val)
    // const timer: any = setTimeout(() => {
    //   // this.makeTextareaStyles()
    //   clearTimeout(timer);
    // }, 0);
  }

  labelInput(val: string) {
    console.log(val);
  }

  setlabel(val) {
    this.label = val;
    this.labelChange.emit(val);
  }

}
