import {HeaderComponent} from './header.ts';
import {TestBed, async} from '@angular/core/testing';
import { expect, describe, it, beforeEach } from "chai";

describe('header component', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        HeaderComponent
      ]
    });
    TestBed.compileComponents();
  }));

  it('should render \'HCI My Three\'', () => {
    const fixture = TestBed.createComponent(HeaderComponent);
    fixture.detectChanges();
    const header = fixture.nativeElement;
    expect(header.querySelector('a').textContent.trim()).toBe('HCI My Three');
  });
});
