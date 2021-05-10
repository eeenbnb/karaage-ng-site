import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Subscription } from 'rxjs';

import { HttpArticleService } from '../../../service/http-article/http-article.service'
import { BreadcrumbService } from '../../../service/breadcrumb/breadcrumb.service'
import { TitleMetaService } from '../../../service/title-meta/title-meta.service'

import { ArticleType } from '../../../const-data/article'

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit, OnDestroy {
  date:string = "";
  title:string = "";
  markdown:string = "";
  routerSubscription:Subscription;

  isNoContent:boolean = false;
  articleType:string = ArticleType.Article;

  constructor(
    private activatedRoute:ActivatedRoute,
    private httpArticleService:HttpArticleService,
    private breadcrumbService:BreadcrumbService,
    private titleMetaService:TitleMetaService
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
    this.titleMetaService.removeMetaData();
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
        this.setInfoData(date);
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
        this.setInfoData(date);
      },
      (_err)=>{
        this.setError();
      }
    );
  }

  private setInfoData(date:string){
    this.title = this.markdown.split('\n')[0].replace("#","");
    this.breadcrumbService.setBreadcrumbs([
      { path:[""], name:"top" },
      { path:[".",this.articleType,date], name: this.title },
    ])
    this.titleMetaService.setTitle(this.title + ' | sushi karaage');
    this.titleMetaService.setMetaData(
      this.titleMetaService.getCoalescenceMetaDefinition([
        { name: 'description',content: this.markdown.slice(0,300) },
        { name: 'og:site_name', content: this.title + ' | sushi karaage' },
        { name: 'og:description', content: this.markdown.slice(0,300) },
        { name: 'og:title', content: this.title + " | sushi karaage" },
        { name: 'og:url', content: 'https://sushi.karaage.tokyo/#/' + [this.articleType,date].join("/") },
      ])
    );
  }

  private setError():void{
    this.isNoContent = true;
  }

}
