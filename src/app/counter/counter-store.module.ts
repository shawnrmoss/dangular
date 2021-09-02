import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromCounter from './store/reducers/counter.reducer';
import { CounterEffects } from './store/effects/counter.effects';


@NgModule({
  declarations: [],
  imports: [
  StoreModule.forFeature(fromCounter.counterFeatureKey, fromCounter.reducer),
  EffectsModule.forFeature([CounterEffects])],
  providers: []
})
export class CounterStoreModule { }
