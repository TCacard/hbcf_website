import { Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { GalerieComponent } from './galerie/galerie.component';
import { ContactComponent } from './contact/contact.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { PressReviewComponent } from './press-review/press-review.component';
import { RegisterComponent } from './users/register/register.component';
import { LoginComponent } from './users/login/login.component';
import { AuthGuard } from './auth.guard';
import { ProfileComponent } from './users/profile/profile.component';

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
    {
        path: 'partners',
        loadChildren: () => import('./partners/partners.routes').then(mod => mod.PARTNERS_ROUTES)
    },
    { path: 'gallery', component: GalerieComponent },
    {
        path: 'news',
        loadChildren: () => import('./news/news_routes').then(mod => mod.NEWS_ROUTES)
    },
    { path: 'contact', component: ContactComponent },
    { path: 'inscriptions', component: InscriptionComponent },
    { path: 'revue-de-presse', component: PressReviewComponent },


    { path: 'register', component: RegisterComponent, canActivate: [AuthGuard] },
    { path: 'login', component: LoginComponent, canActivate: [AuthGuard] },
    { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] }

];
