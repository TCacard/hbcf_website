import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { InscriptionPage } from '../models/inscriptionPage';

@Injectable({
  providedIn: 'root'
})
export class InscriptionPageService {
  
  private inscriptionUrl = "https://api.cacard.fr/inscriptionPage"

  constructor(private http: HttpClient) { }

  getInscriptionPage() {
    return this.http.get<any[]>(this.inscriptionUrl).pipe(
      map(inscriptionPage => inscriptionPage[0])
    );
  }
}
