import { createReducer, on } from '@ngrx/store';
import { setBreadcrumbs, resetBreadcrumbs } from './breadcrumb.actions';
import { BreadcrumbsState } from './breadcrumb.state'

export const breadcrumbsFeatureKey = 'Breadcrumbs';
export const initialBreadcrumbs:BreadcrumbsState = {
  breadcrumbs:[]
};

const _breadcrumbsReducer = createReducer(
  initialBreadcrumbs,
  on(setBreadcrumbs, (state,props) => (
    {
      breadcrumbs:[...props.breadcrumbs]
    }
  )),
  on(resetBreadcrumbs, (state) => (
    {
      breadcrumbs:[]
    }
  )),
);

export function breadcrumbsReducer(state:any, action:any) {
  return _breadcrumbsReducer(state, action);
}
