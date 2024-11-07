import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PartnersService {
  private navUrl = 'assets/data.json';

  constructor(private http: HttpClient) {}

  getAcutalPartnersData(): Observable<any> {
    return this.http.get<any>(this.navUrl).pipe(
      map(data => data.partners.actual_partners)
    );
  }

  getBecomePartnerData(): Observable<any> {
    return this.http.get<any>(this.navUrl).pipe(
      map(data => data.partners.become_partner)
    );
  }


}
