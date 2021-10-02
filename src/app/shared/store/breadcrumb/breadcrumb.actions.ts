import { createAction, props } from '@ngrx/store';
import { BreadcrumbsState } from './breadcrumb.state';

export const setBreadcrumbs = createAction(
  '[breadcrumbs] set',
  props<BreadcrumbsState>()
);
export const resetBreadcrumbs = createAction('[breadcrumbs] reset');
