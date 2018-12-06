import {Component} from '@angular/core';
import {TestBed, async} from '@angular/core/testing';
import {MainComponent} from './main.ts';
import { expect, describe, it, beforeEach } from "chai";

@Component({selector: 'fountain-footer', template: ''})
class MockFooterComponent {}
@Component({selector: 'fountain-header', template: ''})
class MockHeaderComponent {}
@Component({selector: 'mt-balance', template: ''})
class MockBalanceComponent {}
@Component({selector: 'mt-plan', template: ''})
class MockPlanComponent {}
@Component({selector: 'mt-topup-tabs', template: ''})
class MockTopupTabsComponent {}
@Component({selector: 'mt-links', template: ''})
class MockLinksComponent {}


describe('Main Component', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        MainComponent,
        MockFooterComponent,
        MockHeaderComponent,
        MockBalanceComponent,
        MockPlanComponent,
        MockTopupTabsComponent,
        MockLinksComponent
      ]
    });
    TestBed.compileComponents();
  }));

  it('should render the header, title, techs and footer', () => {
    const fixture = TestBed.createComponent(MainComponent);
    fixture.detectChanges();
    const main = fixture.nativeElement;
    expect(main.querySelector('fountain-header')).toBeDefined();
    expect(main.querySelector('fountain-footer')).toBeDefined();
    expect(main.querySelector('mt-balance')).toBeDefined();
    expect(main.querySelector('mt-topup-tabs')).toBeDefined();
    expect(main.querySelector('mt-plan')).toBeDefined();
    expect(main.querySelector('mt-links')).toBeDefined();
  });
});
