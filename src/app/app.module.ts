import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { SecurityContext } from '@angular/core';
import { TransferHttpCacheModule } from '@nguniversal/common';

import { MarkdownModule } from 'ngx-markdown';

import { AppRoutingModule } from '@router/app-routing.module';
import { RootContentModule } from '@shared/components/root-content/root-content.module';

import { NgrxModule } from '@shared/store/ngrx.module';

@Component({
  selector: 'app-root',
  template: `
    <root-content>
      <router-outlet></router-outlet>
    </root-content>
  `,
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
})
export class AppComponent {}

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    TransferHttpCacheModule,
    HttpClientModule,

    MarkdownModule.forRoot({
      sanitize: SecurityContext.NONE,
    }),

    AppRoutingModule,
    RootContentModule,
    NgrxModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
