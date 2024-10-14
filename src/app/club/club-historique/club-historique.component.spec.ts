import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClubHistoriqueComponent } from './club-historique.component';

describe('ClubHistoriqueComponent', () => {
  let component: ClubHistoriqueComponent;
  let fixture: ComponentFixture<ClubHistoriqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClubHistoriqueComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClubHistoriqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
