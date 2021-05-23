import { createReducer, on } from '@ngrx/store';
import { setBreadcrumbs, resetBreadcrumbs } from './breadcrumb.actions';
import { KaraageBreadcrumbs } from 'src/@types/karaage-breadcrumb';

export const initialBreadcrumbs:KaraageBreadcrumbs = [];

const _breadcrumbsReducer = createReducer(
  initialBreadcrumbs,
  on(setBreadcrumbs, (state,props) => {
    return [...props.breadcrumbs]
  }),
  on(resetBreadcrumbs, (state) => []),
);

export function breadcrumbsReducer(state:any, action:any) {
  return _breadcrumbsReducer(state, action);
}
