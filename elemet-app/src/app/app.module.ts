import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';

// import module
import { ElModule } from 'element-angular';
import { FormsComponent } from './components/forms/forms.component';
import { TablesComponent } from './components/tables/tables.component';

const mainRoutes: Routes = [
  // {
  //   path: '',
  //   component: MainComponent,
  //   children: [
  //     { path: '', redirectTo: 'index', pathMatch: 'full' },
  //     { path: 'index', component: IndexComponent }
  //   ]
  // }
  {
    path: '',
    component: AppComponent,
    children: [
      { path: '', redirectTo: 'index', pathMatch: 'full' },
      {
        path: 'index',
        loadChildren: 'app/client/index/index.module#IndexModule'
      },
      {
        path: 'salary-manage/salary-entering',
        loadChildren: 'app/client/salary-manage/salary-entering/salary-entering.module#SalaryEnteringModule'
      },
      {
        path: 'salary-manage/salary-post',
        loadChildren: 'app/client/salary-manage/salary-post/salary-post.module#SalaryPostModule'
      },
      {
        path: 'psnedit',
        loadChildren: 'app/client/psnedit/psnedit.module#PsneditModule'
      },
      {
        path: 'module-manage',
        loadChildren: 'app/admin/module-manage/module-manage.module#ModuleManageModule'
      },
      {
        path: 'useraccount-manage',
        loadChildren: 'app/admin/useraccount/useraccount-manage/useraccount-manage.module#UseraccountManageModule'
      }
    ]
  }
];


@NgModule({
  declarations: [
    AppComponent,
    FormsComponent,
    TablesComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    ElModule.forRoot(),
    RouterModule.forRoot(mainRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
