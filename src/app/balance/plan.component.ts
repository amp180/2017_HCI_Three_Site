import { Component } from '@angular/core';
import { BalanceService } from './balance.service';


@Component({
  selector: 'mt-plan',
  template:  require( './plan.html' ),
})
export class PlanComponent {
 type : any;
 data_data : any;
 data_minutes: any;
 data_texts : any;
 options : any;

  constructor ( public balanceService : BalanceService ) {
    // http://www.chartjs.org/docs/#chart-configuration-creating-a-chart-with-options
    this.type = 'pie';
    this.options = {
      responsive: true,
      maintainAspectRatio: false,
    };
    this.data_data = {
      labels: [ 'Unused', 'Used', ],
      datasets: [
        {
          label: 'data',
          data: [ ( balanceService.dataMax - balanceService.dataCurrent ), balanceService.dataCurrent],
          backgroundColor: [
          'rgb( 0, 0, 255)',
          'rgb( 200, 0, 0)',
        ],
        },
      ]
    };
    this.data_minutes = {
      labels: [ 'Unused', 'Used', ],
      datasets: [
        {
          label: 'minutes',
          data: [ ( balanceService.minutesMax - balanceService.minutesCurrent ), balanceService.minutesCurrent],
          backgroundColor: [
          'rgb( 0, 0, 255 )',
          'rgb( 200, 0, 0 )',
            ],
        },
      ]
    };
    this.data_texts = {
      labels: [ 'Unused', 'Used', ],
      datasets: [
        {
          label: 'texts',
          data: [ ( balanceService.textsMax - balanceService.textsCurrent ), balanceService.textsCurrent],
          backgroundColor: [
          'rgb( 0, 0, 255 )',
          'rgb( 200, 0, 0 )',
        ],
        },
      ]
    };
  }
}
