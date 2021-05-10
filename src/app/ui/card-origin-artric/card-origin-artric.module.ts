import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CardOriginArtricComponent } from './card-origin-artric/card-origin-artric.component';

import { ReactWrapperModule } from '../react-wrapper/react-wrapper.module'

@NgModule({
  declarations: [
    CardOriginArtricComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactWrapperModule
  ],
  exports: [
    CardOriginArtricComponent
  ],
})
export class CardOriginArtricModule { }
