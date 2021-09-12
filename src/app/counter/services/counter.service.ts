import { Injectable } from '@angular/core';
import { from, Observable, of } from 'rxjs';
import { _SERVICE } from 'src/declarations/counter/counter.did';
const counterService = require('src/declarations/counter').counter as _SERVICE;

@Injectable({
  providedIn: 'root'
})
export class CounterService {

  constructor() { }

  increment(): Observable<bigint> {     
    return from(counterService.increment());    
  }

  getValue(): Observable<bigint> {
    return from(counterService.getValue());
  }
}
