import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Team } from '../models/team'; // Chemin vers votre fichier d'interface
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ClubDataService {
  private navUrl = 'assets/data.json';

  constructor(private http: HttpClient) {}

  getClubHistory(): Observable<any> {
      return this.http.get<any>(this.navUrl).pipe(
        map(data => data.club.history)
      );
  }

  getClubNumbers(): Observable<any> {
    return this.http.get<any>(this.navUrl).pipe(
      map(data => data.club.numbers)
    );
  }

  getClubLocation(): Observable<any> {
    return this.http.get<any>(this.navUrl).pipe(
      map(data => data.club.location)
    );
  }
}