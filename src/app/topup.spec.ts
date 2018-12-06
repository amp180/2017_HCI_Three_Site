import {TestBed, async} from '@angular/core/testing';
// import { Injectable } from '@angular/core';
import { Component } from '@angular/core';

import { TabsComponent } from './topup/tabs.component';
import { CardFormComponent } from './topup/cardform.component';
import { CodeFormComponent } from './topup/codeform.component';
// import { TopupModule } from './balance';


@Component({
  selector: 'mt-coform',
  template: '',
})
export class MockCodeFormComponent {
}

@Component({
  selector: 'mt-ccform',
  template: '',
})
export class MockCardFormComponent {
}


describe('tabs component', () => {

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        TabsComponent,
        MockCodeFormComponent,
        MockCardFormComponent,
      ],
    });
    TestBed.compileComponents().catch(error => console.error(error));
  }));

  it('Should show tabs.', () => {
    const fixture = TestBed.createComponent(TabsComponent);
    fixture.detectChanges();
    const balance = fixture.nativeElement;
    expect(balance.querySelector('*[role="tablist"]')).toBeDefined();
    expect(balance.querySelector('*[role="tab"]')).toBeDefined();
    expect(balance.querySelector('*[role="tabpanel"]')).toBeDefined();
  });

  it('Should show the forms.', () => {
    const fixture = TestBed.createComponent(TabsComponent);
    fixture.detectChanges();
    const balance = fixture.nativeElement;
    expect(balance.querySelector('mt-ccform')).toBeDefined();
    expect(balance.querySelector('mt-coform')).toBeDefined();
  });

  it('Should have both tab selectors.', () => {
    const fixture = TestBed.createComponent(TabsComponent);
    fixture.detectChanges();
    const balance = fixture.nativeElement;
    const CCTabLink = balance.querySelector('#CCTabLink');
    const COTabLink = balance.querySelector('#COTabLink');
    const CCTab = balance.querySelector('#CCTab');
    const COTab = balance.querySelector('#COTab');

    // links should be defined
    expect(COTabLink).toBeDefined();
    expect(CCTabLink).toBeDefined();
    // tab index so only one is tab selectable
    expect(CCTabLink.getAttribute('tabindex')).toBe("0");
    expect(COTabLink.getAttribute('tabindex')).toBe("-1");
    // aria-selected so the correct tab is anounced by screenreader
    expect(CCTabLink.getAttribute('aria-selected')).toBeDefined();
    expect(COTabLink.getAttribute('aria-selected')).toBe(null);
    // only one tab should be hidden
    expect(CCTab.getAttribute('hidden')).toBe(null);
    expect(COTab.getAttribute('hidden')).toBeDefined();
  });

  it('Should switch between tabs when they`re clicked.', () => {
    const fixture = TestBed.createComponent(TabsComponent);
    fixture.detectChanges();
    const balance = fixture.nativeElement;
    const CCTabLink = balance.querySelector('#CCTabLink');
    const COTabLink = balance.querySelector('#COTabLink');
    const CCTab = balance.querySelector('#CCTab');
    const COTab = balance.querySelector('#COTab');

    balance.querySelector('#COTabLink').focus();
    fixture.detectChanges();

    expect(CCTabLink.getAttribute('tabindex')).toBe("-1");
    expect(COTabLink.getAttribute('tabindex')).toBe("0");
    expect(CCTabLink.getAttribute('aria-selected')).toBe(null);
    expect(COTabLink.getAttribute('aria-selected')).toBeDefined();
    expect(COTab.getAttribute('hidden')).toBe(null);
    expect(CCTab.getAttribute('hidden')).toBeDefined();

  });

});

describe('topup code form component', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        CodeFormComponent,
      ],
    });
    TestBed.compileComponents();
  }));

  it('Should have a form.', () => {
    const fixture = TestBed.createComponent(CodeFormComponent);
    fixture.detectChanges();
    const plan = fixture.nativeElement;
    expect(plan.querySelector('form')).toBeDefined();
  });
});

describe('credit card form component', () => {

    beforeEach(async(() => {
      TestBed.configureTestingModule({
        declarations: [
          CardFormComponent,
        ],
      });
      TestBed.compileComponents();
    }));

    it('Should have a form.', () => {
      const fixture = TestBed.createComponent(CardFormComponent);
      fixture.detectChanges();
      const plan = fixture.nativeElement;
      expect(plan.querySelector('form')).toBeDefined();
    });

});
