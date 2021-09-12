import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap, switchMap, tap } from 'rxjs/operators';
import { of, pipe } from 'rxjs';

import * as CounterActions from '../actions/counter.actions';
import { CounterService } from '../../services';



@Injectable()
export class CounterEffects {

  loadCounters$ = createEffect(() => 
    this.actions$.pipe( 
      ofType(CounterActions.loadCounters),
      concatMap((_) => {        
        return this.counterService.getValue().pipe(
          map((count: bigint) => {
            return CounterActions.loadCountersSuccess({ count });
          }),
          catchError((error) => of(CounterActions.loadCountersFail({ error })))
        );
      })
    )
  );

  incrementCount$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CounterActions.incrementCount),
      concatMap((_) => {        
        return this.counterService.increment().pipe(
          map((count: bigint) => {            
            return CounterActions.loadCountersSuccess({ count });
          }),
          catchError((error) => of(CounterActions.loadCountersFail({ error })))
        );
      })      
    )
  );

  
  // failEffect$ = createEffect(() =>
  //   this.actions$.pipe(
  //     ofType(CounterActions.loadCountersFail),
  //     tap((val) => console.log('*****FAIL EFFECT***** - ' + val + ' - ' + new Date())),     
  //   )
  // );

  constructor(private actions$: Actions, protected counterService: CounterService) {}
  
}
