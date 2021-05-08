import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ArticleType } from '../const-data/article';

const routes: Routes = [
  {
    path: "",
    loadChildren: ()=> import("../pages/top/top.module").then(m => m.TopModule),
    data:{
      breadcrumb: false,
    }
  },
  {
    path: "article",
    loadChildren: ()=> import("../pages/article/article.module").then(m => m.ArticleModule),
    data:{
      articleType: ArticleType.Article
    }
  },
  {
    path: "feature",
    loadChildren: ()=> import("../pages/article/article.module").then(m => m.ArticleModule),
    data:{
      articleType: ArticleType.Feature
    }
  },
  {
    path: "test-page",
    loadChildren: ()=> import("../pages/test-feild/test-feild.module").then(m => m.TestFeildModule),
    data:{

    }
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{
    //useHash: true,
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
