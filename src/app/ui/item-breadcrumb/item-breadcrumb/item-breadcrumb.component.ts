import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { KaraageBreadcrumbs } from 'src/@types/karaage-breadcrumb';

import { Store, select } from '@ngrx/store';
import { selectBreadcrumbs } from '../../../ngrx/breadcrumb/breadcrumb.selectors'

//import { ReactItemBreadcrumb } from '../../_react-items/item-breadcrumb'

@Component({
  selector: 'item-breadcrumb',
  templateUrl: './item-breadcrumb.component.html',
  styleUrls: ['./item-breadcrumb.component.scss']
})
export class ItemBreadcrumbComponent implements OnInit, OnDestroy {
  breadcrumbs:KaraageBreadcrumbs = [];
  breadcrumbsSubscription:Subscription;

  breadcrumbs$ = this.store.pipe(select(selectBreadcrumbs));

  constructor(
    private store:Store,
  ) {
    this.breadcrumbsSubscription = this.breadcrumbs$.subscribe((data)=>{
      this.breadcrumbs = data.breadcrumbs;
    })
  }

  ngOnInit(): void {

  }

  ngOnDestroy(): void {
    this.breadcrumbsSubscription.unsubscribe();
  }
}
