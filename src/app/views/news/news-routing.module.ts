import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryComponent } from './category/category.component';
import { EventsComponent } from './events/events.component';
import { SingleNewsComponent } from './single-news/single-news.component';

const routes: Routes = [
  {
    path: 'events',
    component: EventsComponent
  },
  {
    path: 'category/:id',
    component: CategoryComponent
  },
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
