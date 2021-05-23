import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";
import { SecurityContext } from '@angular/core';

import { MarkdownModule } from 'ngx-markdown';

import { AppRoutingModule } from './router/app-routing.module';
import { RootContentModule } from './ui/root-content/root-content.module';

import { AppComponent } from './app.component';
import { ScullyLibModule } from '@scullyio/ng-lib';

import { StoreModule } from '@ngrx/store';
import { breadcrumbsReducer } from './ngrx/breadcrumb/breadcrumb.reducer'

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,

    MarkdownModule.forRoot({
      sanitize: SecurityContext.NONE
    }),

    AppRoutingModule,
    RootContentModule,
    ScullyLibModule,
    StoreModule.forRoot({breadcrumbs:breadcrumbsReducer})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
