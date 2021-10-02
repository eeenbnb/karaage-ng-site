import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArticleRoutingModule } from './article-routing.module';
import { ArticleComponent } from './article/article.component';

import { CardOriginModule } from '@shared/components/card-origin/card-origin.module';
import { ItemArticleModule } from '@shared/components/item-article/item-article.module';

@NgModule({
  declarations: [ArticleComponent],
  imports: [
    CommonModule,
    ArticleRoutingModule,

    CardOriginModule,
    ItemArticleModule,
  ],
})
export class ArticleModule {}
