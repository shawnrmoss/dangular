import { Action, createReducer, on } from '@ngrx/store';
import * as CounterActions from '../actions/counter.actions';

export const counterFeatureKey = 'counter';

export interface State {
  count: number;  
}

export const initialState: State = {
  count: 0,
};


export const reducer = createReducer(
  initialState,

  on(CounterActions.loadCounters, (state) => {
    return {
      ...state,
      loading: true,
    };
  }),
  on(CounterActions.loadCountersSuccess, (state, { count }) => {
    return {
      ...state,
      count: count,
      loading: false,
      loaded: true,
    };
  }),
  on(CounterActions.loadCountersFail, (state) => {
    return {
      ...state,
      loading: false,
      loaded: false,
    };
  }),

);

