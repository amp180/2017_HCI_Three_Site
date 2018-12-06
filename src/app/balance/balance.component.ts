import { Component } from '@angular/core';
import { BalanceService } from './balance.service';

@Component({
  selector: 'mt-balance',
  template:  require( './balance.html' ),
})
export class BalanceComponent {
  constructor ( public balanceService : BalanceService ) {
  }
}
