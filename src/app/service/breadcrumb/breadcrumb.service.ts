import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

export interface Breadcrumb{
  path:string[],
  name:string,
}
export type Breadcrumbs = Breadcrumb[];

@Injectable({
  providedIn: 'root'
})
export class BreadcrumbService {
  private setItem:Breadcrumbs = []
  private sharedDataSource = new Subject<Breadcrumbs>();
  private sharedDataSourceObservable = this.sharedDataSource.asObservable();

  constructor() { }

  getBreadcrumbsChageEvent():Observable<Breadcrumbs>{
    return this.sharedDataSourceObservable;
  }

  setBreadcrumbs(breadcrumbs:Breadcrumbs):void{
    this.setItem = breadcrumbs;
    this.sharedDataSource.next(breadcrumbs);
  }

  getSetBreadcrumbs(){
    return this.setItem;
  }
}
