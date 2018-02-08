import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { ElModule } from 'element-angular';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { FormTextComponent } from './form-text/form-text.component';
import { MessageService } from './message/message.service';
import { ComponentLoaderFactory } from './loader-factory';
import { MessageModule } from './message/message.module';

import { HeadlineModule } from 'angular-cyui';
import {MatTabsModule} from '@angular/material/tabs';

@NgModule({
  declarations: [
    AppComponent,
    FormTextComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ElModule.forRoot(),
    MessageModule,
    HeadlineModule,
    MatTabsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
