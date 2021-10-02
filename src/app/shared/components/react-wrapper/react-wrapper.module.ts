import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactWrapperComponent } from './react-wrapper/react-wrapper.component';

@NgModule({
  declarations: [ReactWrapperComponent],
  imports: [CommonModule],
  exports: [ReactWrapperComponent],
})
export class ReactWrapperModule {}
