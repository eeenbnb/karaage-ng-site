import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardOriginArticleLoadingComponent } from './card-origin-article-loading/card-origin-article-loading.component';

import { ReactWrapperModule } from '../react-wrapper/react-wrapper.module'

@NgModule({
  declarations: [
    CardOriginArticleLoadingComponent
  ],
  imports: [
    CommonModule,
    ReactWrapperModule
  ],
  exports: [
    CardOriginArticleLoadingComponent
  ]
})
export class CardOriginArticleLoadingModule { }
