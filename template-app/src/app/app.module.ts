import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NgTemplateOutlet } from '@angular/common';


import { AppComponent } from './app.component';
import { AlertComponent } from './components/alert/alert.component';
import { Dy1Component } from './components/dy1/dy1.component';
import { Dy2Component } from './components/dy2/dy2.component';
import { TestComponent } from './components/test/test.component';

@NgModule({
  declarations: [
    AppComponent,
    AlertComponent,
    Dy1Component,
    Dy2Component,
    TestComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
