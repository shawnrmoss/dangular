import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { incrementCount, loadCounters, selectCount } from './counter';

import { _SERVICE } from 'src/declarations/counter/counter.did';
const counterService = require('src/declarations/counter').counter as _SERVICE;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'dAngular';
  inputText = '';
  inputText$: Observable<string> | undefined;
  count$: Observable<number> | undefined;

  constructor(protected store: Store<any>){
    this.store.dispatch(loadCounters());
  }

  ngOnInit(): void {
    this.count$ = this.store.pipe(select(selectCount));
  }

  onIncrement(){    
    this.store.dispatch(incrementCount());            
  }
}
