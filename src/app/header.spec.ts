import {HeaderComponent} from './header';
import {TestBed, async} from '@angular/core/testing';

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
