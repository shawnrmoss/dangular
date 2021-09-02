import { Action, createReducer, on } from '@ngrx/store';
import * as CounterActions from '../actions/counter.actions';

export const counterFeatureKey = 'counter';

export interface State {
  count: bigint;  
}

export const initialState: State = {
  count: BigInt(0),
};


export const reducer = createReducer(
  initialState,

  on(CounterActions.loadCounters, state => state),
  on(CounterActions.loadCountersSuccess, (state, { count }) => {
    return {
      ...state,
      loading: count,
    };
  }),
  on(CounterActions.loadCountersFailure, (state, action) => state),

);

