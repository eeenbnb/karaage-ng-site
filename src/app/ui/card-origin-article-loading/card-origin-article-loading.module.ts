import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardOriginArticleLoadingComponent } from './card-origin-article-loading/card-origin-article-loading.component';

import { CardOriginModule } from '../card-origin/card-origin.module'

@NgModule({
  declarations: [
    CardOriginArticleLoadingComponent
  ],
  imports: [
    CommonModule,
    CardOriginModule
  ],
  exports: [
    CardOriginArticleLoadingComponent
  ]
})
export class CardOriginArticleLoadingModule { }
