import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Team } from '../models/team'; // Chemin vers votre fichier d'interface
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TeamsService {
  private navUrl = 'http://localhost:5000/teams';
  private tempUrl = 'assets/data.json';

  constructor(private http: HttpClient) {}

  getTeams(): Observable<any> {
    return this.http.get<any>(this.navUrl).pipe(
      map(data => {
        return data;
      })
    );
  }


  getTeamById(id: number): Observable<any> {
    return this.getTeams().pipe(
      map(data => {
        return data.find((team: any) => team._id === id);
      })
    );
  }

  postTeam(teamData: any, file: File) {
    let formData = new FormData();
    formData.append('name', teamData.name);
    formData.append('civility', teamData.civility);
    formData.append('type', teamData.type);
    
    if (file) {
      formData.append('picture', file, file.name);
    } else {
      console.warn("⚠️ Aucun fichier sélectionné !");
    }

    formData.forEach((value, key) => {
      console.log(`${key}:`, value);
    });

    debugger
    return this.http.post(this.navUrl, formData);
  }
}
