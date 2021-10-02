import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivationEnd, NavigationEnd } from '@angular/router';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';

import { PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

import { GaService } from '../../../service/ga/ga.service';
import { CanonicalService } from '../../../service/canonical/canonical.service';

@Component({
  selector: 'root-content',
  templateUrl: './root-content.component.html',
  styleUrls: ['./root-content.component.scss'],
})
export class RootContentComponent implements OnInit, OnDestroy {
  navigationEndSubscription: Subscription;
  isRouterDataSubscription: Subscription;

  isBreadcrumb: boolean = true;
  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private router: Router,
    private gaService: GaService,
    private canonicalService: CanonicalService
  ) {
    this.navigationEndSubscription = this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((params: any) => {
        if (isPlatformBrowser(platformId)) {
          this.gaService.sendPageView(params.url);
          this.canonicalService.setCanonicalURL();
          window.scroll({ top: 0 });
        }
      });

    this.isRouterDataSubscription = this.router.events
      .pipe(
        filter(
          (event) =>
            event instanceof ActivationEnd &&
            event.snapshot.children.length == 0
        )
      )
      .subscribe((event: any) => {
        this.isBreadcrumb =
          event.snapshot.data['breadcrumb'] !== undefined
            ? event.snapshot.data['breadcrumb']
            : true;
      });
  }

  ngOnInit(): void {}

  ngOnDestroy(): void {
    this.navigationEndSubscription.unsubscribe();
    this.isRouterDataSubscription.unsubscribe();
  }
}
