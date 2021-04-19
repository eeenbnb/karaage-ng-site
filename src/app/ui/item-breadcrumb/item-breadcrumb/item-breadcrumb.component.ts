import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { BreadcrumbService, Breadcrumbs } from '../../../service/breadcrumb/breadcrumb.service'

@Component({
  selector: 'item-breadcrumb',
  templateUrl: './item-breadcrumb.component.html',
  styleUrls: ['./item-breadcrumb.component.scss']
})
export class ItemBreadcrumbComponent implements OnInit, OnDestroy {
  breadcrumbs:Breadcrumbs = [];
  breadcrumbsSubscription:Subscription;

  constructor(
    private breadcrumbService:BreadcrumbService
  ) {
    this.breadcrumbsSubscription = this.breadcrumbService.getBreadcrumbsChageEvent().subscribe(
      (breadcrumbs:Breadcrumbs)=>{
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
