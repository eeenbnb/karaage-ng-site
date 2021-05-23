import { createSelector, createFeatureSelector } from "@ngrx/store";
import { BreadcrumbsState } from "./breadcrumb.state";
import { KaraageBreadcrumbs } from 'src/@types/karaage-breadcrumb';

export const selectBreadcrumbs = createSelector(
  (state: BreadcrumbsState ) => state.breadcrumbs,
  (breadcrumbs: KaraageBreadcrumbs) => breadcrumbs
);
