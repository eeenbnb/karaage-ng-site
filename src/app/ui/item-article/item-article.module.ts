import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemArticleComponent } from './item-article/item-article.component';

import { MarkdownModule } from 'ngx-markdown';

@NgModule({
  declarations: [
    ItemArticleComponent
  ],
  imports: [
    CommonModule,
    MarkdownModule.forChild(),
  ],
  exports: [
    ItemArticleComponent
  ],
})
export class ItemArticleModule { }
