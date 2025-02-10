import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Contact } from '../models/contact';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  // private navUrl = 'assets/data.json';

  private apiUrl = 'http://127.0.0.1:5000/contact';

  constructor(private http: HttpClient) {}

  getClubHistory(): Observable<Contact> {
      return this.http.get<Contact[]>(this.apiUrl).pipe(
        map(data => data[0])
      );
  }

  sendEmail(formData: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/send-email`, formData);
  }


}
