import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RootHeaderComponent } from './root-header/root-header.component';



@NgModule({
  declarations: [
    RootHeaderComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    RootHeaderComponent
  ]
})
export class RootHeaderModule { }
