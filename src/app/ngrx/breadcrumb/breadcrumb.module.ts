import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { breadcrumbsReducer, breadcrumbsFeatureKey } from './breadcrumb.reducer';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature(breadcrumbsFeatureKey, breadcrumbsReducer),
  ]
})
export class BreadcrumbModule { }
