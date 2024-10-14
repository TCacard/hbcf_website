import { Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { AcutalitesComponent } from './acutalites/acutalites.component';
import { GalerieComponent } from './galerie/galerie.component';
import { ContactComponent } from './contact/contact.component';
import { InscriptionComponent } from './inscription/inscription.component';

export const routes: Routes = [
    { path: '', redirectTo: '/accueil', pathMatch: 'full' },
    { path: 'accueil', component: AccueilComponent },
    { 
        path: 'equipes', 
        loadChildren: () => import('./equipes/equipes.routes').then(mod => mod.EQUIPE_ROUTES)
    },
    { 
        path: 'evenements', 
        loadChildren: () => import('./evenement/event.routes').then(mod => mod.EVENT_ROUTES)
    },
    { 
        path: 'club',
        loadChildren: () => import('./club/club.routes').then(mod => mod.CLUB_ROUTES)
    },
    { path: 'galerie', component: GalerieComponent },
    { path: 'actus', component: AcutalitesComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'inscriptions', component: InscriptionComponent },

];
