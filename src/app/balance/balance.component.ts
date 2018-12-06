import { Component, Inject } from '@angular/core';
import { BalanceService } from './balance.service.ts';

@Component({
  selector: 'mt-balance',
  template:  require( './balance.html' ),
})
export class BalanceComponent {
  constructor (@Inject(BalanceService) public balanceService : BalanceService) {
  }
}
