import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Team } from '../models/team'; // Chemin vers votre fichier d'interface
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TeamsService {
  private navUrl = 'assets/data.json';

  constructor(private http: HttpClient) {}

  getLeadingTeams(): Observable<any> {
    return this.http.get<any>(this.navUrl).pipe(
      map(data => data.teams.leading_teams)
    );
  }

  getCompetitionTeams(): Observable<any> {
    return this.http.get<any>(this.navUrl).pipe(
      map(data => data.teams.competition_teams)
    );
  }

  getAllTeams(): Observable<any> {
    return new Observable(observer => {
      Promise.all([
        this.getCompetitionTeams().toPromise(),
        this.getLeadingTeams().toPromise()
      ]).then(([competitionTeams, leadingTeams]) => {
        observer.next({
          competition_teams: competitionTeams,
          leading_teams: leadingTeams
        });
        observer.complete();
      });
    });
  }

  getTeamById(id: number): Observable<any> {
    return this.getAllTeams().pipe(
      map(data => {
        const allTeams = [...data.competition_teams, ...data.leading_teams];
        return allTeams.find(team => team.id === id);
      })
    );
  }
}
