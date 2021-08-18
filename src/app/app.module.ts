import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";
import { SecurityContext } from '@angular/core';
import { TransferHttpCacheModule } from '@nguniversal/common';

import { MarkdownModule } from 'ngx-markdown';

import { AppRoutingModule } from './router/app-routing.module';
import { RootContentModule } from './ui/root-content/root-content.module';

import { AppComponent } from './app.component';

import { NgrxModule } from './ngrx/ngrx.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    TransferHttpCacheModule,
    HttpClientModule,

    MarkdownModule.forRoot({
      sanitize: SecurityContext.NONE
    }),

    AppRoutingModule,
    RootContentModule,
    NgrxModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
