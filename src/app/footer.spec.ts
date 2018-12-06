import {FooterComponent} from './footer.ts';
import {TestBed, async} from '@angular/core/testing';
import { expect, describe, it, beforeEach } from "chai";

describe('footer component', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        FooterComponent
      ]
    });
    TestBed.compileComponents();
  }));

  it('should render \'FountainJS team\'', () => {
    const fixture = TestBed.createComponent(FooterComponent);
    fixture.detectChanges();
    const footer = fixture.nativeElement;
    expect(footer.querySelector('a').textContent.trim()).toBe('Generator-Fountain-Angular2.');
  });
});
