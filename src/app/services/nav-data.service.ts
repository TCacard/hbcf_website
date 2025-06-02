import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { Nav, NavItem } from '../models/nav';
import { Title } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root',
})
export class NavDataService {
  private navUrl = 'https://api.cacard.fr/nav';

  private siteTitle = 'Handball Club de la Fillière'; 

  constructor(private http: HttpClient, private title: Title) {}

  getNavData(): Observable<Nav> {
    return this.http.get<Nav[]>(this.navUrl).pipe(
      map(data => data[0])
    );
  }

  getIconItems(): Observable<NavItem[]> {
    return this.http.get<Nav[]>(this.navUrl).pipe(
      map(data => data[0].navItems.filter(item => item.icon))
    );
  }

  setTitle(pageTitle: string): void {
    const fullTitle = pageTitle ? `${pageTitle} | ${this.siteTitle}` : this.siteTitle;
    this.title.setTitle(fullTitle);
  }
}