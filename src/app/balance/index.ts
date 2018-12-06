import {NgModule} from '@angular/core';
import { ChartModule } from 'angular2-chartjs';
import {CommonModule} from '@angular/common';

import {BalanceService} from './balance.service';
import {BalanceComponent} from './balance.component';
import {PlanComponent} from './plan.component';

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
  ],
  providers: [
    BalanceService,
  ]
})
export class BalanceModule {}
