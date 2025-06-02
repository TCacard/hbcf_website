import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Partner } from '../models/partner';

@Injectable({
  providedIn: 'root'
})
export class PartnersService {
  private actualPartnersUrl = 'https://api.cacard.fr/actual-partners';
  private becomePartnerUrl = 'https://api.cacard.fr/become-partners';
  private tempUrl = 'assets/data.json';

  constructor(private http: HttpClient) {}

  getAcutalPartnersData(): Observable<Partner> {
    return this.http.get<Partner[]>(this.actualPartnersUrl).pipe(
      map(actualPartners => {
        return actualPartners[0];
      })
    );
  }

  getBecomePartnerData(): Observable<Partner> {
    return this.http.get<Partner[]>(this.becomePartnerUrl).pipe(
      map(becomePartner => {
        return becomePartner[0];
      })
    );
  }


}
