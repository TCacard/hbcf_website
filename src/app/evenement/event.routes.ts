import { Routes } from '@angular/router';
import { EvenementComponent } from './event_front/evenement.component';
import { EvenementDetailsComponent } from './event_details/event_details.component';

export const EVENT_ROUTES: Routes = [
  { path: '', component: EvenementComponent }, // route par défaut pour /equipes
  { path: ':id', component: EvenementDetailsComponent } // route pour /equipes/:id
];
