import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { RootHeaderComponent } from './root-header/root-header.component';



@NgModule({
  declarations: [
    RootHeaderComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    RootHeaderComponent
  ]
})
export class RootHeaderModule { }
