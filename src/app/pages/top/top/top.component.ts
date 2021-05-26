import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import { setBreadcrumbs } from '../../../ngrx/breadcrumb/breadcrumb.actions'

import { HttpTopService } from '../../../service/http-top/http-top.service'
import { TitleMetaService } from '../../../service/title-meta/title-meta.service'

import { KaraageArticle } from 'src/@types/karaage-article';

@Component({
  selector: 'app-top',
  templateUrl: './top.component.html',
  styleUrls: ['./top.component.scss']
})
export class TopComponent implements OnInit, OnDestroy {
  topItems:KaraageArticle[] = [];
  pageCount:number = 1;
  maxPageCount:number = 1;
  routerSubscription:Subscription;
  isFirstLoadComplate:boolean = false;
  isPageCountLoadComplate:boolean = false;
  isEnd:boolean = false;

  constructor(
    private store: Store,
    private activatedRoute:ActivatedRoute,
    private httpTopService:HttpTopService,
    private titleMetaService:TitleMetaService
  ) {
    this.routerSubscription = this.activatedRoute.paramMap.subscribe(
      (params:ParamMap)=>{
        let p = params.get("pageCount");
        this.pageCount = p ?  Number(p) : 1;
        this.topItems = [];
        this.getItems();
      }
    )
  }

  ngOnInit(): void {
    this.getPageCount();
    this.store.dispatch(setBreadcrumbs({breadcrumbs:[]}));
    this.titleMetaService.setTitle("sushi karaage")
    this.titleMetaService.setMetaData(
      this.titleMetaService.getCoalescenceMetaDefinition([
        { name: 'description', content: 'sushi karaageのトップページです' },
        { name: 'og:description', content: 'sushi karaageのトップページです' },
      ])
    );
  }

  ngOnDestroy(){
    this.titleMetaService.removeMetaData();
  }

  private getItems(){
    if(this.isEnd) return;

    this.httpTopService.getTopData(this.pageCount).subscribe(
      (list:KaraageArticle[])=>{
        if(list){
          this.topItems = list;
          this.isFirstLoadComplate = true;
        }
      },
      (err)=>{
        this.isEnd = true;
      }
    );
  }

  private getPageCount(){
    this.httpTopService.getTopPageCount().subscribe(
      (data:{count:number})=>{
        this.maxPageCount = data.count;
        this.isPageCountLoadComplate = true;
      },
      (err)=>{
        this.isEnd = true;
      }
    );
  }

}
