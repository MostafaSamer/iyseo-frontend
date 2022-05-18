import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderFooterLayoutComponent } from './shared/layout/header-footer-layout/header-footer-layout.component';
import { HeaderComponent } from './shared/layout/header-footer-layout/header/header.component';
import { FooterComponent } from './shared/layout/header-footer-layout/footer/footer.component';
import { BlankLayoutComponent } from './shared/layout/blank-layout/blank-layout.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderFooterLayoutComponent,
    HeaderComponent,
    FooterComponent,
    BlankLayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
