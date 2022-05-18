import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SingleNewsComponent } from './single-news/single-news.component';

const routes: Routes = [
  {
    path: ':id',
    component: SingleNewsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewsRoutingModule { }
