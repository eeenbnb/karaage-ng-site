import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListChildComponent } from './list-child/list-child.component';

@NgModule({
  declarations: [ListChildComponent],
  imports: [CommonModule],
  exports: [ListChildComponent],
})
export class ListChildModule {}
