import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ItemPaginationComponent } from './item-pagination/item-pagination.component';

import { CardOriginModule } from '../card-origin/card-origin.module'

@NgModule({
  declarations: [
    ItemPaginationComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    CardOriginModule,
  ],
  exports: [
    ItemPaginationComponent
  ],
})
export class ItemPaginationModule { }
