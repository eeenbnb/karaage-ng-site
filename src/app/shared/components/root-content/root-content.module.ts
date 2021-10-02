import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { RootContentComponent } from './root-content/root-content.component';

import { RootHeaderModule } from '../root-header/root-header.module'
import { RootSideModule } from '../root-side/root-side.module'
import { ItemBreadcrumbModule } from '../item-breadcrumb/item-breadcrumb.module'

@NgModule({
  declarations: [
    RootContentComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    RootSideModule,

    RootHeaderModule,
    ItemBreadcrumbModule,
  ],
  exports: [
    RootContentComponent
  ],
})
export class RootContentModule { }
