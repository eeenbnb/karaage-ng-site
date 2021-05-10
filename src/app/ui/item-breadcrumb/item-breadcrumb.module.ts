import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemBreadcrumbComponent } from './item-breadcrumb/item-breadcrumb.component';

import { ReactWrapperModule } from '../react-wrapper/react-wrapper.module'

@NgModule({
  declarations: [
    ItemBreadcrumbComponent
  ],
  imports: [
    CommonModule,
    ReactWrapperModule
  ],
  exports: [
    ItemBreadcrumbComponent
  ],
})
export class ItemBreadcrumbModule { }
