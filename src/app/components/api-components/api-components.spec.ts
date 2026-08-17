import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiComponents } from './api-components';

describe('ApiComponents', () => {
  let component: ApiComponents;
  let fixture: ComponentFixture<ApiComponents>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApiComponents],
    }).compileComponents();

    fixture = TestBed.createComponent(ApiComponents);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
