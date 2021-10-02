import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { setBreadcrumbs } from '@shared/store/breadcrumb/breadcrumb.actions';

import { HttpTopService } from '@shared/service/http-top/http-top.service';
import { TitleMetaService } from '@shared/service/title-meta/title-meta.service';

import { KaraageArticle } from 'src/@types/karaage-article';

@Component({
  selector: 'app-top',
  templateUrl: './top.component.html',
  styleUrls: ['./top.component.scss'],
})
export class TopComponent implements OnInit, OnDestroy {
  pageCount: number = 1;
  emptyArrays: number[] = [...Array(10)];
  topItems$: Observable<KaraageArticle[]>;
  maxPageCount$: Observable<{
    count: number | undefined;
  }> = this.httpTopService.getTopPageCount();

  constructor(
    private store: Store,
    private activatedRoute: ActivatedRoute,
    private httpTopService: HttpTopService,
    private titleMetaService: TitleMetaService
  ) {
    this.topItems$ = this.activatedRoute.paramMap.pipe(
      switchMap((params) => {
        let p = params.get('pageCount');
        this.pageCount = p ? Number(p) : 1;
        return this.httpTopService.getTopData(this.pageCount);
      })
    );
  }

  ngOnInit(): void {
    this.store.dispatch(setBreadcrumbs({ breadcrumbs: [] }));
    this.titleMetaService.setTitle('sushi karaage');
    this.titleMetaService.setMetaData(
      this.titleMetaService.getCoalescenceMetaDefinition([
        { name: 'description', content: 'sushi karaageのトップページです' },
        { name: 'og:description', content: 'sushi karaageのトップページです' },
      ])
    );
  }

  ngOnDestroy() {
    this.titleMetaService.removeMetaData();
  }
}
