import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignalComp } from './signal-comp';

describe('SignalComp', () => {
  let component: SignalComp;
  let fixture: ComponentFixture<SignalComp>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignalComp],
    }).compileComponents();

    fixture = TestBed.createComponent(SignalComp);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
