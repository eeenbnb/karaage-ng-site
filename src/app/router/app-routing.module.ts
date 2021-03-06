import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ArticleType } from 'src/@types/articleType';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('../pages/top/top.module').then((m) => m.TopModule),
    data: {
      breadcrumb: false,
    },
  },
  {
    path: 'article',
    loadChildren: () =>
      import('../pages/article/article.module').then((m) => m.ArticleModule),
    data: {
      articleType: ArticleType.Article,
    },
  },
  {
    path: 'feature',
    loadChildren: () =>
      import('../pages/article/article.module').then((m) => m.ArticleModule),
    data: {
      articleType: ArticleType.Feature,
    },
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      initialNavigation: 'enabled',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
