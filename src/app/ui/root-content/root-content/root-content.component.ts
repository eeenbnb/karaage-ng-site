import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';

import { GaService } from '../../../service/ga/ga.service'

@Component({
  selector: 'root-content',
  templateUrl: './root-content.component.html',
  styleUrls: ['./root-content.component.scss']
})
export class RootContentComponent implements OnInit, OnDestroy {
  navigationEndSubscription:Subscription;

  constructor(
    private router:Router,
    private gaService:GaService
  ) {
    this.navigationEndSubscription = this.router.events.pipe( filter(event => event instanceof NavigationEnd) ).subscribe(
      (params: any) => {
        this.gaService.sendPageView(params.url);
      }
    );
  }

  ngOnInit(): void {}

  ngOnDestroy(): void {
    this.navigationEndSubscription.unsubscribe();
  }
}
