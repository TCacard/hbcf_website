import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { Navigation } from '../models/navigation.model'; // Chemin vers votre fichier d'interface

@Injectable({
  providedIn: 'root',
})
export class NavDataService {
  private navUrl = 'assets/data.json';

  constructor(private http: HttpClient) {}

  getNavData(): Observable<any> {
    return this.http.get<any>(this.navUrl).pipe(
      map(data => data.nav)
    );
  }
}