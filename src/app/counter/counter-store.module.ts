import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import * as fromCounter from './store/counter.reducer';
import { EffectsModule } from '@ngrx/effects';
import { CounterEffects } from './store/counter.effects';


@NgModule({
  declarations: [],
  imports: [
    StoreModule.forFeature(fromCounter.counterFeatureKey, fromCounter.reducer),
    EffectsModule.forFeature([CounterEffects])],
  providers: []
})
export class CounterStoreModule { }
