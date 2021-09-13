import { createAction, props } from '@ngrx/store';

export enum CounterActionTypes {
  LoadCounters = '[Counter] Load',
  LoadCountersSuccess = '[Counter] Load Success',
  LoadCountersFail = '[Counter] Load Fail',
  IncrementCounter = '[Counter] Increment',
  IncrementCounterSuccess = '[Counter] Increment Success',
}

export let CounterFailTypes = [
  CounterActionTypes.LoadCountersFail
];

export const loadCounters = createAction(
  CounterActionTypes.LoadCounters
);

export const loadCountersSuccess = createAction(
  CounterActionTypes.LoadCountersSuccess,
  props<{ count: number }>()
);

export const loadCountersFail = createAction(
  CounterActionTypes.LoadCountersFail,
  props<{ error: any }>()
);

export const incrementCount = createAction(
  CounterActionTypes.IncrementCounter
);

export const incrementSuccess = createAction(
  CounterActionTypes.IncrementCounterSuccess
);
