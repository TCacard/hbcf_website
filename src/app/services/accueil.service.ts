import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AccueilPage } from '../models/accueil';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccueilService {
  private accueilUrl = "https://api.cacard.fr/accueil"
  constructor(private http: HttpClient) {  }

  getAccueilData() {
    return this.http.get<AccueilPage[]>(this.accueilUrl).pipe(
      map(accueil => accueil[0])
    );
  }
}
