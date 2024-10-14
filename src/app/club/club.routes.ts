import { Routes } from '@angular/router';
import { ClubChiffresComponent } from './club-chiffres/club-chiffres.component';
import { ClubHistoriqueComponent } from './club-historique/club-historique.component';
import { ClubLocalisationComponent } from './club-localisation/club-localisation.component'

export const CLUB_ROUTES: Routes = [
  { path: 'numbers', component: ClubChiffresComponent },
  { path: 'history', component: ClubHistoriqueComponent },
  { path: 'location', component: ClubLocalisationComponent }
];
