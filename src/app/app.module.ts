import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './router/app-routing.module';
import { RootContentModule } from './ui/root-content/root-content.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RootContentModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
