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

  getServiceData(): Observable<any> {
    return this.http.get<Event>(this.navUrl);
  }

  getServiceByName(name: string): Observable<any> {
    return this.getServiceData().pipe(
      map(data => {
        return data.club[name]
      })
    );
  }
}