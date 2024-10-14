import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Team } from '../models/team'; // Chemin vers votre fichier d'interface
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class EventDataService {
  private navUrl = 'assets/data.json';

  constructor(private http: HttpClient) {}

  getEventData(): Observable<any> {
    return this.http.get<Event>(this.navUrl);
  }

  getEventById(id: number): Observable<any> {
    return this.getEventData().pipe(
      map(data => {
        return data.events.find((event:any) => event.id === id);
      })
    );
  }
}