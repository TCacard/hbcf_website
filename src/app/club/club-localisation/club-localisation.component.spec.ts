import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClubLocalisationComponent } from './club-localisation.component';

describe('ClubLocalisationComponent', () => {
  let component: ClubLocalisationComponent;
  let fixture: ComponentFixture<ClubLocalisationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClubLocalisationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClubLocalisationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
