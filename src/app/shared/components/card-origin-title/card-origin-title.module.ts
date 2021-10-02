import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardOriginTitleComponent } from './card-origin-title/card-origin-title.component';

import { CardOriginModule } from '@shared/components/card-origin/card-origin.module';

@NgModule({
  declarations: [CardOriginTitleComponent],
  imports: [CommonModule, CardOriginModule],
  exports: [CardOriginTitleComponent],
})
export class CardOriginTitleModule {}
