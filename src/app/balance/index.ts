import {NgModule} from '@angular/core';
import { ChartModule } from 'angular2-chartjs';
import {CommonModule} from '@angular/common';

import {BalanceService } from './balance.service.ts';
import {BalanceComponent} from './balance.component.ts';
import {PlanComponent} from './plan.component.ts';

@NgModule({
  imports: [
    CommonModule,
    ChartModule,
  ],
  declarations: [
    BalanceComponent,
    PlanComponent,
  ],
  exports: [
    BalanceComponent,
    PlanComponent,
  ]
})
export class BalanceModule {}
