import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

import { KaraageBreadcrumbs } from 'src/@types/karaage-breadcrumb';

@Injectable({
  providedIn: 'root'
})
export class BreadcrumbService {
  private setItem:KaraageBreadcrumbs = []
  private sharedDataSource = new Subject<KaraageBreadcrumbs>();
  private sharedDataSourceObservable = this.sharedDataSource.asObservable();

  constructor() { }

  getBreadcrumbsChageEvent():Observable<KaraageBreadcrumbs>{
    return this.sharedDataSourceObservable;
  }

  setBreadcrumbs(breadcrumbs:KaraageBreadcrumbs):void{
    this.setItem = breadcrumbs;
    this.sharedDataSource.next(breadcrumbs);
  }

  getSetBreadcrumbs(){
    return this.setItem;
  }
}
