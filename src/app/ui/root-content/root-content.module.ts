import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RootContentComponent } from './root-content/root-content.component';



@NgModule({
  declarations: [
    RootContentComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    RootContentComponent
  ],
})
export class RootContentModule { }
