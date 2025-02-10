import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PressReviewComponent } from './press-review.component';

describe('PressReviewComponent', () => {
  let component: PressReviewComponent;
  let fixture: ComponentFixture<PressReviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PressReviewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PressReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
