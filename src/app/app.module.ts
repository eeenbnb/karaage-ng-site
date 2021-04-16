import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";

import { MarkdownModule } from 'ngx-markdown';

import { AppRoutingModule } from './router/app-routing.module';
import { RootContentModule } from './ui/root-content/root-content.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,

    MarkdownModule.forRoot(),

    AppRoutingModule,
    RootContentModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
