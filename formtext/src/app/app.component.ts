import { Component, OnInit, Inject, forwardRef } from '@angular/core';
import { MessageService } from './message/message.service';
import { AbstractControl } from '@angular/forms';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
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
  validateForm: FormGroup;
  names = '';
  major = 1;
  minor = 23;
  person = {};

  constructor(
    private _msgService: MessageService,
    private formBuilder: FormBuilder
  ) {}

  // tslint:disable-next-line:use-life-cycle-interface
  ngOnInit() {
    this.validateForm = this.formBuilder.group({
      city: [ '', [this.cityValidator] ]
    });

  }

  newPerson() {
    this.person  = {
      name: '',
      age: 0
    };
  }

  newMinor() {
    this.minor++;
  }

  newMajor() {
    this.major++;
    this.minor = 0;
  }

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

  statusCtrl(item: string): string {
    if (!this.validateForm.controls[item]) { return; }
    const control: AbstractControl = this.validateForm.controls[item];
    return control.dirty && control.hasError('status') ? control.errors.status : '';
  }

  messageCtrl(item: string): string {
    if (!this.validateForm.controls[item]) { return; }
    const control: AbstractControl = this.validateForm.controls[item];
    return control.dirty && control.hasError('message') ? control.errors.message : '';
  }

  private cityValidator = (control: FormControl) => {
    if (!control.value) {
      return { status: 'error', message: '必须填写城市名' };
    }
    if (!/[一-龥]/.test(control.value)) {
      return { status: 'error', message: '城市名必须是中文' };
    }
    return { status: 'success' };
  }

  submit() {
    console.log(this.validateForm.value);
    console.log(this.validateForm);
  }
}
