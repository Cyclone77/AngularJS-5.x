import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';

/**
 * app路由
 */
const appRoutes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {
     path: 'login',
     loadChildren: 'app/login/login.module#LoginModule'
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
