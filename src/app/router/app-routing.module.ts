import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "",
    loadChildren: ()=> import("../pages/top/top.module").then(m => m.TopModule),
  },
  {
    path: "article",
    loadChildren: ()=> import("../pages/article/article.module").then(m => m.ArticleModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{
    useHash: true,
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
