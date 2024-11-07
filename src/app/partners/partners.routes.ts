import { Routes } from '@angular/router';
import { OurPartnersComponent } from './our-partners/our-partners.component';
import { BePartnerComponent } from './be-partner/be-partner.component';

export const PARTNERS_ROUTES: Routes = [
  { path: 'actual_partners', component: OurPartnersComponent },
  { path: 'become_partners', component: BePartnerComponent }
];
