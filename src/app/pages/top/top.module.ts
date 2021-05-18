import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TopRoutingModule } from './top-routing.module';
import { TopComponent } from './top/top.component';

import { CardOriginArtricModule } from '../../ui/card-origin-artric/card-origin-artric.module'
import { CardOriginTitleModule } from '../../ui/card-origin-title/card-origin-title.module'

import { ListParentModule } from '../../ui/list-parent/list-parent.module'
import { ListChildModule } from '../../ui/list-child/list-child.module'

import { ItemPaginationModule } from '../../ui/item-pagination/item-pagination.module'

@NgModule({
  declarations: [
    TopComponent
  ],
  imports: [
    CommonModule,
    TopRoutingModule,

    CardOriginArtricModule,
    CardOriginTitleModule,

    ListParentModule,
    ListChildModule,

    ItemPaginationModule
  ]
})
export class TopModule { }
