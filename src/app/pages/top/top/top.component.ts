import { Component, OnInit, OnDestroy } from '@angular/core';

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
  isFirstLoadComplate:boolean = false;
  isEnd:boolean = false;

  constructor(
    private httpTopService:HttpTopService,
    private breadcrumbService:BreadcrumbService,
    private titleMetaService:TitleMetaService
  ) { }

  ngOnInit(): void {
    this.getItems();
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
          this.topItems = this.topItems.concat(list);
          this.isFirstLoadComplate = true;
          this.pageCount ++;
        }
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
