import { Component, OnInit } from '@angular/core';

import { HttpTopService, TopItems } from '../../../service/http-top/http-top.service'
import { BreadcrumbService } from '../../../service/breadcrumb/breadcrumb.service'

@Component({
  selector: 'app-top',
  templateUrl: './top.component.html',
  styleUrls: ['./top.component.scss']
})
export class TopComponent implements OnInit {
  topItems:TopItems = [];
  pageCount:number = 1;
  isEnd:boolean = false;

  constructor(
    private httpTopService:HttpTopService,
    private breadcrumbService:BreadcrumbService
  ) { }

  ngOnInit(): void {
    this.httpTopService.getTopData(this.pageCount).subscribe(
      (list:TopItems)=>{
        this.topItems = this.topItems.concat(list);
        this.pageCount ++;
      },
      (err)=>{
        this.isEnd = true;
      }
    );
    this.breadcrumbService.setBreadcrumbs([
      { path:["/"], name:"top" },
    ])
  }

}
