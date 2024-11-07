import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BePartnerComponent } from './be-partner.component';

describe('BePartnerComponent', () => {
  let component: BePartnerComponent;
  let fixture: ComponentFixture<BePartnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BePartnerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BePartnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
