import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RootContentComponent } from './root-content/root-content.component';

import { RootHeaderModule } from '../root-header/root-header.module'

@NgModule({
  declarations: [
    RootContentComponent
  ],
  imports: [
    CommonModule,
    RootHeaderModule
  ],
  exports: [
    RootContentComponent
  ],
})
export class RootContentModule { }
