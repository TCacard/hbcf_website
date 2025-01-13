import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ClubHistory, ClubLocation, ClubNumbers } from '../models/club';

@Injectable({
  providedIn: 'root',
})
export class ClubDataService {
  private clubHistoryUrl = 'http://localhost:5000/club-history';
  private clubNumbersUrl = 'http://localhost:5000/club-numbers';
  private clubLocationUrl = 'http://localhost:5000/club-location';

  // private navUrl = 'assets/data.json';

  constructor(private http: HttpClient) {}

  getClubHistory(): Observable<ClubHistory> {
      return this.http.get<ClubHistory[]>(this.clubHistoryUrl).pipe(
        map(clubHistory => clubHistory[0])
      );
  }

  getClubNumbers(): Observable<ClubNumbers> {
    return this.http.get<ClubNumbers[]>(this.clubNumbersUrl).pipe(
      map(clubNumbers => clubNumbers[0])
    );
  }

  getClubLocation(): Observable<ClubLocation> {
    return this.http.get<ClubLocation[]>(this.clubLocationUrl).pipe(
      map(clubLocation => clubLocation[0])
    );
  }
}