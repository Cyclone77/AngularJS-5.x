import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ElModule } from 'element-angular'
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { FormTextComponent } from './form-text/form-text.component';


@NgModule({
  declarations: [
    AppComponent,
    FormTextComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ElModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
