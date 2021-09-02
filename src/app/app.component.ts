import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { CounterService, incrementCount, loadCounters, selectCount } from './counter';
import { HelloService } from './hello.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'dAngular';
  inputText = '';
  inputText$: Observable<string> | undefined;
  count$: Observable<bigint> | undefined;

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
