import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ArticleComponent } from './article/article.component';

const routes: Routes = [
  {
    path: ":date",
    component: ArticleComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArticleRoutingModule { }
