import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClubChiffresComponent } from './club-chiffres.component';

describe('ClubChiffresComponent', () => {
  let component: ClubChiffresComponent;
  let fixture: ComponentFixture<ClubChiffresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClubChiffresComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClubChiffresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
