import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ItemPaginationComponent } from './item-pagination/item-pagination.component';

import { ReactWrapperModule } from '../react-wrapper/react-wrapper.module'

@NgModule({
  declarations: [
    ItemPaginationComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactWrapperModule
  ],
  exports: [
    ItemPaginationComponent
  ],
})
export class ItemPaginationModule { }
