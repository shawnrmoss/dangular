import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import { _SERVICE } from 'src/declarations/counter/counter.did';
const counterService = require('src/declarations/counter').counter as _SERVICE;

@Injectable({
  providedIn: 'root'
})
export class CounterService {

  constructor() { }

  increment(): Observable<undefined> {    
    return from(counterService.increment());
  }

  getValue(): Observable<bigint> {
    return from(counterService.getValue());
  }
}
