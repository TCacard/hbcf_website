import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcutalitesComponent } from './acutalites.component';

describe('AcutalitesComponent', () => {
  let component: AcutalitesComponent;
  let fixture: ComponentFixture<AcutalitesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AcutalitesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AcutalitesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
