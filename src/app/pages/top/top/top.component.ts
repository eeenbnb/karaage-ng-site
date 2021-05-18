import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { HttpTopService } from '../../../service/http-top/http-top.service'
import { BreadcrumbService } from '../../../service/breadcrumb/breadcrumb.service'
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
  isFirstLoadComplate:boolean = false;
  isPageCountLoadComplate:boolean = false;
  isEnd:boolean = false;

  constructor(
    private activatedRoute:ActivatedRoute,
    private httpTopService:HttpTopService,
    private breadcrumbService:BreadcrumbService,
    private titleMetaService:TitleMetaService
  ) {

  }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(
      (params:Params)=>{
        this.pageCount = params["page"] ? params["page"] : 1;
        this.topItems = [];
        this.getItems();
      }
    )
    this.getPageCount();
    this.breadcrumbService.setBreadcrumbs([]);
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

  bottomLoad(){
    this.getItems();
  }

}
