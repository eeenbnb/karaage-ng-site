import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArticleRoutingModule } from './article-routing.module';
import { ArticleComponent } from './article/article.component';

import { CardOriginModule } from '../../ui/card-origin/card-origin.module'
import { ItemArticleModule } from '../../ui/item-article/item-article.module'

@NgModule({
  declarations: [
    ArticleComponent
  ],
  imports: [
    CommonModule,
    ArticleRoutingModule,
    
    CardOriginModule,
    ItemArticleModule
  ]
})
export class ArticleModule { }
