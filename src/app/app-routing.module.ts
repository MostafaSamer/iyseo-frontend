import { NgModule } from '@angular/core';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { HeaderFooterLayoutComponent } from 'src/app/shared/layout/header-footer-layout/header-footer-layout.component'
import { BlankLayoutComponent } from './shared/layout/blank-layout/blank-layout.component';

const routes: Routes = [
  {
    path: '',
    component: HeaderFooterLayoutComponent,
    loadChildren: () => import('./views/home/home.module').then(c => c.HomeModule)
  },
  {
    path: 'auth',
    component: BlankLayoutComponent,
    loadChildren: () => import('./views/auth/auth.module').then(c => c.AuthModule)
  },
  {
    path: 'news',
    component: HeaderFooterLayoutComponent,
    loadChildren: () => import('./views/news/news.module').then(c => c.NewsModule)
  },
  {
    path: 'videos',
    component: HeaderFooterLayoutComponent,
    loadChildren: () => import('./views/videos/videos.module').then(c => c.VideosModule)
  },
  {
    path: 'contact-us',
    component: HeaderFooterLayoutComponent,
    loadChildren: () => import('./views/contact-us/contact-us.module').then(c => c.ContactUsModule)
  }
];

@NgModule({
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
  imports: [RouterModule.forRoot(routes, { useHash: true, scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
