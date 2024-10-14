import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EvenementDetailsComponent } from './event_details.component';

describe('EvenementComponent', () => {
  let component: EvenementDetailsComponent;
  let fixture: ComponentFixture<EvenementDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EvenementDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EvenementDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
