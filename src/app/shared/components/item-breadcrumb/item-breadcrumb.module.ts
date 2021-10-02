import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ItemBreadcrumbComponent } from './item-breadcrumb/item-breadcrumb.component';

import { CardOriginModule } from '@shared/components/card-origin/card-origin.module';

@NgModule({
  declarations: [ItemBreadcrumbComponent],
  imports: [CommonModule, RouterModule, CardOriginModule],
  exports: [ItemBreadcrumbComponent],
})
export class ItemBreadcrumbModule {}
