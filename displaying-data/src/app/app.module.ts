import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeroComponent } from './components/hero/hero.component';
import { ModulesyntaxComponent } from './components/modulesyntax/modulesyntax.component';
import { HttpclientComponent } from './components/httpclient/httpclient.component';


@NgModule({
  declarations: [
    AppComponent,
    HeroComponent,
    ModulesyntaxComponent,
    HttpclientComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
