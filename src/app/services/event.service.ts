import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Team } from '../models/team'; // Chemin vers votre fichier d'interface
import { map } from 'rxjs/operators';
import { ClubEvent } from '../models/event';

@Injectable({
  providedIn: 'root',
})
export class EventDataService {
  private navUrl = 'http://localhost:5000/events';
  private tempUrl = 'assets/data.json';

  constructor(private http: HttpClient) {}

  getEventData(): Observable<ClubEvent[]> {
    return this.http.get<ClubEvent[]>(this.navUrl).pipe(
      map(events => events)
    );
  }

  getEventById(id: number): Observable<ClubEvent> {
    return this.getEventData().pipe(
      map(data => {
        const event = data.find((event: ClubEvent) => event._id === id);
        if (!event) {
          throw new Error(`Event with id ${id} not found`);
        }
        return event;
      })
    );
  }
}