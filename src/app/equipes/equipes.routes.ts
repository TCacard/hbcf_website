import { Routes } from '@angular/router';
import { EquipesComponent } from './equipe/equipes_global/equipes.component';
import { EquipesDetailsComponent } from './equipes_details/equipes_details.component';

export const EQUIPE_ROUTES: Routes = [
  { path: '', component: EquipesComponent }, // route par défaut pour /equipes
  { path: ':id', component: EquipesDetailsComponent } // route pour /equipes/:id
];
