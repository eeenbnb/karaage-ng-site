import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Subscription } from 'rxjs';

import { HttpArticleService } from '../../../service/http-article/http-article.service'

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit, OnDestroy {
  markdown:string = "";
  routerSubscription:Subscription;

  isNoContent:boolean = false;

  constructor(
    private activatedRoute:ActivatedRoute,
    private httpArticleService:HttpArticleService
  ) {
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
    this.httpArticleService.getArticleData(date).subscribe(
      (data)=>{
        this.markdown = data;
      },
      (_err)=>{
        this.setError();
      }
    );
  }

  private setError():void{
    this.isNoContent = true;
  }

}
