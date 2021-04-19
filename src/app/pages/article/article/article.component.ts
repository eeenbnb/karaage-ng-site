import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Subscription } from 'rxjs';

import { HttpArticleService } from '../../../service/http-article/http-article.service'
import { BreadcrumbService } from '../../../service/breadcrumb/breadcrumb.service'

import { ArticleType } from '../../../const-data/article'

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit, OnDestroy {
  date:string = "";
  markdown:string = "";
  routerSubscription:Subscription;

  isNoContent:boolean = false;
  articleType:string = ArticleType.Article;

  constructor(
    private activatedRoute:ActivatedRoute,
    private httpArticleService:HttpArticleService,
    private breadcrumbService:BreadcrumbService
  ) {
    this.articleType = this.activatedRoute.snapshot.data.articleType;
    this.routerSubscription = this.activatedRoute.paramMap.subscribe(
      (p:ParamMap)=>{
        if(p.get("date")){
          this.getArticleData(p.get("date") || "");
        }else{
          this.setError();
        }
      }
    );
  }

  ngOnInit():void{}

  ngOnDestroy():void{
    this.routerSubscription.unsubscribe();
  }

  private getArticleData(date:string):void{
    if(this.articleType == ArticleType.Article){
      this.getArticleDataByAricle(date);
    }
    if(this.articleType == ArticleType.Feature){
      this.getArticleDataByFeaure(date);
    }
  }

  private getArticleDataByAricle(date:string){
    this.httpArticleService.getArticleData(date).subscribe(
      (data)=>{
        this.markdown = data;
        this.setBreadcrumbs(date);
      },
      (_err)=>{
        this.setError();
      }
    );
  }

  private getArticleDataByFeaure(date:string){
    this.httpArticleService.getFeatureData(date).subscribe(
      (data)=>{
        this.markdown = data;
        this.setBreadcrumbs(date);
      },
      (_err)=>{
        this.setError();
      }
    );
  }

  private setBreadcrumbs(date:string){
    this.breadcrumbService.setBreadcrumbs([
      { path:["/"], name:"top" },
      { path:["/","article",date], name:this.markdown.split('\n')[0] },
    ])
  }

  private setError():void{
    this.isNoContent = true;
  }

}
