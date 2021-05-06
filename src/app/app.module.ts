import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";
import { SecurityContext } from '@angular/core';

import { MarkdownModule } from 'ngx-markdown';

import { AppRoutingModule } from './router/app-routing.module';
import { RootContentModule } from './ui/root-content/root-content.module';

import { AppComponent } from './app.component';
import { ScullyLibModule } from '@scullyio/ng-lib';

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
    ScullyLibModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
