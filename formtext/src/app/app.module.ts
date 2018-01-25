import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ElModule } from 'element-angular'
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { FormTextComponent } from './form-text/form-text.component';
import { MessageService } from './message/message.service';
import { ComponentLoaderFactory } from './loader-factory';
import { MessageModule } from './message/message.module';


@NgModule({
  declarations: [
    AppComponent,
    FormTextComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ElModule.forRoot(),
    MessageModule
  ],
  providers: [ MessageService, ComponentLoaderFactory ],
  bootstrap: [AppComponent]
})
export class AppModule { }
