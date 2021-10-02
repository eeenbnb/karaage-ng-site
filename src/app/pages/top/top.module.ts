import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TopRoutingModule } from './top-routing.module';
import { TopComponent } from './top/top.component';

import { CardOriginArtricModule } from '@shared/components/card-origin-artric/card-origin-artric.module';
import { CardOriginTitleModule } from '@shared/components/card-origin-title/card-origin-title.module';
import { CardOriginArticleLoadingModule } from '@shared/components/card-origin-article-loading/card-origin-article-loading.module';

import { ListParentModule } from '@shared/components/list-parent/list-parent.module';
import { ListChildModule } from '@shared/components/list-child/list-child.module';

import { ItemPaginationModule } from '@shared/components/item-pagination/item-pagination.module';

@NgModule({
  declarations: [TopComponent],
  imports: [
    CommonModule,
    TopRoutingModule,

    CardOriginArtricModule,
    CardOriginTitleModule,
    CardOriginArticleLoadingModule,

    ListParentModule,
    ListChildModule,

    ItemPaginationModule,
  ],
})
export class TopModule {}
