import { Injectable } from '@angular/core';

@Injectable()
export class BalanceService {

  balance : string;
  dataCurrent : number;
  dataMax : number;
  minutesCurrent : number;
  minutesMax : number;
  textsCurrent : number;
  textsMax : number;

  constructor() {
      this.balance = '3.90';
      this.dataCurrent = 800;
      this.dataMax = 1000;
      this.minutesCurrent = 10;
      this.minutesMax = 80;
      this.textsCurrent = 50;
      this.textsMax = 400;
  }

}
