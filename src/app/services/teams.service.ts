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

  getTeamData(): Observable<any> {
    return this.http.get<Team>(this.navUrl);
  }

  getTeamById(id: number): Observable<any> {
    return this.getTeamData().pipe(
      map(data => {
        const allTeams = [...data.equipes.equipes_competition, ...data.equipes.equipe_dirigeante];
        return allTeams.find(team => team.id === id);
      })
    );
  }
}
