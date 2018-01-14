import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { TreeModule } from 'primeng/primeng';


import { AppComponent } from './app.component';
import { SysPipePipe } from './sys-pipe.pipe';


@NgModule({
  declarations: [
    AppComponent,
    SysPipePipe
  ],
  imports: [
    BrowserModule,
    TreeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
