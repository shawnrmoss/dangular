import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromCounter from '../reducers/counter.reducer';

export const selectCounterState = createFeatureSelector<fromCounter.State>(
  fromCounter.counterFeatureKey
);
