import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CardOriginArtricComponent } from './card-origin-artric/card-origin-artric.component';

import { CardOriginModule } from '../card-origin/card-origin.module';

@NgModule({
  declarations: [CardOriginArtricComponent],
  imports: [CommonModule, RouterModule, CardOriginModule],
  exports: [CardOriginArtricComponent],
})
export class CardOriginArtricModule {}
