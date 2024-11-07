import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private navUrl = 'assets/data.json';

  private apiUrl = 'http://127.0.0.1:5000';

  constructor(private http: HttpClient) {}

  getClubHistory(): Observable<any> {
      return this.http.get<any>(this.navUrl).pipe(
        map(data => data.contact)
      );
  }

  sendEmail(formData: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/send-email`, formData);
  }


}
