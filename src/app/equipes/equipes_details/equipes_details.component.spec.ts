import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EquipesDetailsComponent } from './equipes_details.component';

describe('EquipesComponent', () => {
  let component: EquipesDetailsComponent;
  let fixture: ComponentFixture<EquipesDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EquipesDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EquipesDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
