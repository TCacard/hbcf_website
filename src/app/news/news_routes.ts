import { Routes } from '@angular/router';
import { NewsDetailsComponent } from './news-details/news-details.component';
import { NewsComponent } from './news_front/news.component';

export const NEWS_ROUTES: Routes = [
  { path: '', component:  NewsComponent },
  { path: ':id', component: NewsDetailsComponent },
];
