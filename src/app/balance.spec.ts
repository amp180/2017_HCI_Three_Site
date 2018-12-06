import {TestBed, async} from '@angular/core/testing';
import { Injectable } from '@angular/core';
// import { Component } from '@angular/core';
import { ChartModule } from 'angular2-chartjs';

import {BalanceService} from './balance/balance.service';
import {BalanceComponent} from './balance/balance.component';
import {PlanComponent} from './balance/plan.component';
// import { BalanceModule } from './balance';

describe( 'BalanceService', () => {
  let balanceService : BalanceService;

  beforeEach(() => {
    balanceService = new BalanceService();
  });

 it('Should have a balance property', () => {
    expect(balanceService.balance).toBeDefined();
 });

 it('Should have a balance property', () => {
    expect(balanceService.balance).toBeDefined();
 });

 it('Should have data properties', () => {
    expect(balanceService.dataCurrent).toBeDefined();
    expect(balanceService.dataMax).toBeDefined();
 });

 it('Should have call minutes properties', () => {
    expect(balanceService.minutesCurrent).toBeDefined();
    expect(balanceService.minutesMax).toBeDefined();
 });

 it('Should have properties for texts', () => {
    expect(balanceService.textsCurrent).toBeDefined();
    expect(balanceService.textsMax).toBeDefined();
 });

});

@Injectable()
class MockBalanceService {
  balance : string;
  dataCurrent : string;
  dataMax : string;
  minutesCurrent : string;
  minutesMax : string;
  textsCurrent : string;
  textsMax : string;
  constructor() {
    this.balance = '0';
    this.dataCurrent = '0';
    this.dataMax = '0';
    this.minutesCurrent = '0';
    this.minutesMax = '0';
    this.textsCurrent = '0';
    this.textsMax = '0';
  };
}

describe('balance component', () => {

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        BalanceComponent,
      ],
      providers: [
        { provide: BalanceService, useClass: MockBalanceService},
      ],
    });
    TestBed.compileComponents().catch(error => console.error(error));
  }));

  it('Should show balance.', () => {
    const fixture = TestBed.createComponent(BalanceComponent);
    fixture.detectChanges();
    const balance = fixture.nativeElement;
    expect(balance.querySelector('section:first-child>p').textContent.trim()).toBe('€0');
  });

});

describe('plan component', () => {

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports : [
        ChartModule,
      ],
      declarations: [
        PlanComponent,
      ],
      providers: [
        { provide: BalanceService, useClass: MockBalanceService},
      ],
    });
    TestBed.compileComponents();
  }));

  it('Should show 3 charts.', () => {
    const fixture = TestBed.createComponent(PlanComponent);
    fixture.detectChanges();
    const plan = fixture.nativeElement;
    expect(plan.querySelector('chart:nth-of-type(3)')).toBeDefined();
  });

  it('Should show data remaining.', () => {
    const fixture = TestBed.createComponent(PlanComponent);
    fixture.detectChanges();
    const plan = fixture.nativeElement;
    expect(plan.querySelector('section:nth-of-type(1)>p').textContent).toContain('0/0 MB');
  });

  it('Should show minutes remaining.', () => {
    const fixture = TestBed.createComponent(PlanComponent);
    fixture.detectChanges();
    const plan = fixture.nativeElement;
    expect(plan.querySelector('section:nth-of-type(2)>p').textContent).toContain('0/0 Minutes');
  });

  it('Should show texts remaining.', () => {
    const fixture = TestBed.createComponent(PlanComponent);
    fixture.detectChanges();
    const plan = fixture.nativeElement;
    expect(plan.querySelector('section:nth-of-type(3)>p').textContent).toContain('0/0 Texts');
  });

});
