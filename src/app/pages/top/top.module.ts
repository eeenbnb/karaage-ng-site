import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TopRoutingModule } from './top-routing.module';
import { TopComponent } from './top/top.component';

import { CardOriginArtricModule } from '../../ui/card-origin-artric/card-origin-artric.module'

import { ListParentModule } from '../../ui/list-parent/list-parent.module'
import { ListChildModule } from '../../ui/list-child/list-child.module'

@NgModule({
  declarations: [
    TopComponent
  ],
  imports: [
    CommonModule,
    TopRoutingModule,
    CardOriginArtricModule,

    ListParentModule,
    ListChildModule
  ]
})
export class TopModule { }
