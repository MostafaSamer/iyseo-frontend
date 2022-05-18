import { NgModule } from '@angular/core';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { HeaderFooterLayoutComponent } from 'src/app/shared/layout/header-footer-layout/header-footer-layout.component'

const routes: Routes = [
  {
    path: '',
    component: HeaderFooterLayoutComponent,
    loadChildren: () => import('./views/home/home.module').then(c => c.HomeModule)
  }
];

@NgModule({
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
  imports: [RouterModule.forRoot(routes, { useHash: true, scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
