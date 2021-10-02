import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { RootHeaderComponent } from './root-header/root-header.component';

import { CardOriginModule } from '@shared/components/card-origin/card-origin.module';

@NgModule({
  declarations: [RootHeaderComponent],
  imports: [CommonModule, RouterModule, CardOriginModule],
  exports: [RootHeaderComponent],
})
export class RootHeaderModule {}
