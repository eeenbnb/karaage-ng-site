import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListParentComponent } from './list-parent/list-parent.component';

@NgModule({
  declarations: [ListParentComponent],
  imports: [CommonModule],
  exports: [ListParentComponent],
})
export class ListParentModule {}
