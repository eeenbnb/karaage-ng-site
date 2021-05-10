import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardOriginTitleComponent } from './card-origin-title/card-origin-title.component';

import { ReactWrapperModule } from '../react-wrapper/react-wrapper.module'

@NgModule({
  declarations: [
    CardOriginTitleComponent
  ],
  imports: [
    CommonModule,
    ReactWrapperModule
  ],
  exports: [
    CardOriginTitleComponent
  ],
})
export class CardOriginTitleModule { }
