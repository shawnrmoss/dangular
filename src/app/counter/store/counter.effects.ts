import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap } from 'rxjs/operators';
import { Observable, EMPTY, of } from 'rxjs';

import * as CounterActions from './counter.actions';



@Injectable()
export class CounterEffects {

  loadCounters$ = createEffect(() => {
    return this.actions$.pipe( 

      ofType(CounterActions.loadCounters),
      concatMap(() =>
        /** An EMPTY observable only emits completion. Replace with your own observable API request */
        EMPTY.pipe(
          map(data => CounterActions.loadCountersSuccess({ data })),
          catchError(error => of(CounterActions.loadCountersFailure({ error }))))
      )
    );
  });



  constructor(private actions$: Actions) {}

}
