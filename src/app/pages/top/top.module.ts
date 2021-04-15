import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TopRoutingModule } from './top-routing.module';
import { TopComponent } from './top/top.component';

import { CardOriginArtricModule } from '../../ui/card-origin-artric/card-origin-artric.module'

@NgModule({
  declarations: [
    TopComponent
  ],
  imports: [
    CommonModule,
    TopRoutingModule,
    CardOriginArtricModule
  ]
})
export class TopModule { }
