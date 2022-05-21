import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewsRoutingModule } from './news-routing.module';
import { SingleNewsComponent } from './single-news/single-news.component';
import { EventsComponent } from './events/events.component';
import { CategoryComponent } from './category/category.component';


@NgModule({
  declarations: [
    SingleNewsComponent,
    EventsComponent,
    CategoryComponent
  ],
  imports: [
    CommonModule,
    NewsRoutingModule
  ]
})
export class NewsModule { }
