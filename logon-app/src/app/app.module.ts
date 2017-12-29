import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { LogonComponent } from './components/logon/logon.component';

import { PsneditComponent } from './components/psnedit/psnedit.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/logon', pathMatch: 'full' },
  { path: 'logon', component: LogonComponent },
  {
      path: 'views',
      component: HomeComponent,
      children: [
        { path: '', redirectTo: 'psnedit', pathMatch: 'full' },
        { path: 'psnedit', component: PsneditComponent }
      ]
  }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LogonComponent,
    PsneditComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
