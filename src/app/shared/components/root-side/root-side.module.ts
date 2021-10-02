import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RootSideComponent } from './root-side/root-side.component';

import { CardOriginModule } from '@shared/components/card-origin/card-origin.module';

import { ListParentModule } from '@shared/components/list-parent/list-parent.module';
import { ListChildModule } from '@shared/components//list-child/list-child.module';

@NgModule({
  declarations: [RootSideComponent],
  imports: [CommonModule, CardOriginModule, ListParentModule, ListChildModule],
  exports: [RootSideComponent],
})
export class RootSideModule {}
