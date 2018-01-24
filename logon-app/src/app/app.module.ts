import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { LogonComponent } from './components/logon/logon.component';

// import { PsneditComponent } from './components/psnedit/psnedit.component';
import { PsneditModule } from '@glui/psnedit/psnedit.module';
import { CodelistComponent } from './components/codelist/codelist.component';


const appRoutes: Routes = [
  { path: '', redirectTo: '/logon', pathMatch: 'full' },
  { path: 'logon', component: LogonComponent },
  {
      path: 'views',
      component: HomeComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LogonComponent,
    CodelistComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    PsneditModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
