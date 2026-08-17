import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostComp } from './post-comp';

describe('PostComp', () => {
  let component: PostComp;
  let fixture: ComponentFixture<PostComp>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PostComp],
    }).compileComponents();

    fixture = TestBed.createComponent(PostComp);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
