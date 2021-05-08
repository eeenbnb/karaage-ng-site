import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactCardComponent } from './react-card/react-card.component';

import { ReactWrapperModule } from '../react-wrapper/react-wrapper.module'

@NgModule({
  declarations: [
    ReactCardComponent
  ],
  imports: [
    CommonModule,
    ReactWrapperModule
  ],
  exports: [
    ReactCardComponent
  ],
})
export class ReactCardModule { }
