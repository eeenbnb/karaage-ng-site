import { createSelector, createFeatureSelector } from "@ngrx/store";
import { BreadcrumbsState } from "./breadcrumb.state";
import { breadcrumbsFeatureKey } from './breadcrumb.reducer';

const getState = createFeatureSelector<BreadcrumbsState>(breadcrumbsFeatureKey);

export const selectBreadcrumbs = createSelector(
  getState,
  (state) => state
);
