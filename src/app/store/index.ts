import { environment } from '../../environments/environment';
import { Params, RouterStateSnapshot } from '@angular/router';
import * as fromRouter from '@ngrx/router-store';
import { ActionReducer, ActionReducerMap, MetaReducer } from '@ngrx/store';
import { Injectable } from '@angular/core';

export interface RouterStateUrl {
    url: string;
    params: Params;
    queryParams: Params;
}
  
export interface AppState {
  router: fromRouter.RouterReducerState<RouterStateUrl>;  
}

export const reducers: ActionReducerMap<AppState> = {
  router: fromRouter.routerReducer
};

export function logger(reducer: ActionReducer<AppState>): ActionReducer<AppState> {
    return (state, action) => {
        if (
            action.type !== '@ngrx/store/update-reducers' &&
            action.type !== '@ngrx/effects/init' &&
            action.type !== '@ngrx/store/init'
        ) {
            console.groupCollapsed(`Redux Action: ${action.type}`);
            console.log('State', state);
            console.log('Action', action);
            console.groupEnd();
        }

        return reducer(state, action);
    };
}

export const metaReducers: Array<MetaReducer<any>> = !environment.production ? [logger] : [];

@Injectable()
export class DefaultRouterStateSerializer implements fromRouter.RouterStateSerializer<RouterStateUrl> {
  serialize(routerState: RouterStateSnapshot): RouterStateUrl {
    let route = routerState.root;

    while (route.firstChild) {
      route = route.firstChild;
    }

    const {
      url,
      root: { queryParams },
    } = routerState;
    const { params } = route;

    // Only return an object including the URL, params and query params
    // instead of the entire snapshot
    return { url, params, queryParams };
  }
}
