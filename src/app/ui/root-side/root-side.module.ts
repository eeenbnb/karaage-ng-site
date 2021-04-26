import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RootSideComponent } from './root-side/root-side.component';

import { CardOriginModule } from '../card-origin/card-origin.module'

import { ListParentModule } from '../list-parent/list-parent.module'
import { ListChildModule } from '../list-child/list-child.module'

@NgModule({
  declarations: [
    RootSideComponent
  ],
  imports: [
    CommonModule,

    CardOriginModule,
    ListParentModule,
    ListChildModule,
  ],
  exports: [
    RootSideComponent
  ],
})
export class RootSideModule { }
