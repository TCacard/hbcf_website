import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { Nav } from '../models/nav';
import { Title } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root',
})
export class NavDataService {
  private navUrl = 'http://localhost:5000/nav';

  private siteTitle = 'Handball Club de la Fillière'; 

  constructor(private http: HttpClient, private title: Title) {}

  getNavData(): Observable<Nav> {
    return this.http.get<Nav[]>(this.navUrl).pipe(
      map(data => data[0])
    );
  }

  setTitle(pageTitle: string): void {
    const fullTitle = pageTitle ? `${pageTitle} | ${this.siteTitle}` : this.siteTitle;
    this.title.setTitle(fullTitle);
  }
}