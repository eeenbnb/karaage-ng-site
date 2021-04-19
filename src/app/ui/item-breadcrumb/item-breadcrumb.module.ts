import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ItemBreadcrumbComponent } from './item-breadcrumb/item-breadcrumb.component';



@NgModule({
  declarations: [
    ItemBreadcrumbComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    ItemBreadcrumbComponent
  ],
})
export class ItemBreadcrumbModule { }
