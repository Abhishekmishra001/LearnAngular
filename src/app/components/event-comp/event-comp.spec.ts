import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventComp } from './event-comp';

describe('EventComp', () => {
  let component: EventComp;
  let fixture: ComponentFixture<EventComp>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EventComp],
    }).compileComponents();

    fixture = TestBed.createComponent(EventComp);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
