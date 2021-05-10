import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { BreadcrumbService } from '../../../service/breadcrumb/breadcrumb.service'
import { KaraageBreadcrumbs } from 'src/@types/karaage-breadcrumb';

//import { ReactItemBreadcrumb } from '../../_react-items/item-breadcrumb'

@Component({
  selector: 'item-breadcrumb',
  templateUrl: './item-breadcrumb.component.html',
  styleUrls: ['./item-breadcrumb.component.scss']
})
export class ItemBreadcrumbComponent implements OnInit, OnDestroy {
  breadcrumbs:KaraageBreadcrumbs = [];
  breadcrumbsSubscription:Subscription;

  //reactItemBreadcrumb = ReactItemBreadcrumb;

  constructor(
    private breadcrumbService:BreadcrumbService
  ) {
    this.breadcrumbsSubscription = this.breadcrumbService.getBreadcrumbsChageEvent().subscribe(
      (breadcrumbs:KaraageBreadcrumbs)=>{
        this.breadcrumbs = breadcrumbs;
      }
    );
  }

  ngOnInit(): void {

  }

  ngOnDestroy(): void {
    this.breadcrumbsSubscription.unsubscribe();
  }
}
