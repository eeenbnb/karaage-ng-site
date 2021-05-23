import { createAction, props } from '@ngrx/store';
import { KaraageBreadcrumbs } from 'src/@types/karaage-breadcrumb';

export const setBreadcrumbs = createAction(
  '[breadcrumbs] set',
  props<{breadcrumbs:KaraageBreadcrumbs}>()
);
export const resetBreadcrumbs = createAction('[breadcrumbs] reset');
