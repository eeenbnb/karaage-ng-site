import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { KaraageBreadcrumbs } from 'src/@types/karaage-breadcrumb';

import { Store, select } from '@ngrx/store';
import { selectBreadcrumbs } from '../../../ngrx/breadcrumb/breadcrumb.selectors'

//import { ReactItemBreadcrumb } from '../../_react-items/item-breadcrumb'

@Component({
  selector: 'item-breadcrumb',
  templateUrl: './item-breadcrumb.component.html',
  styleUrls: ['./item-breadcrumb.component.scss']
})
export class ItemBreadcrumbComponent implements OnInit {
  breadcrumbs$:Observable<{breadcrumbs:KaraageBreadcrumbs | undefined}> = this.store.pipe(select(selectBreadcrumbs));

  constructor(
    private store:Store,
  ) {}

  ngOnInit(): void {}
}
