import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GalleryService {

  private navUrl = 'assets/data.json';

  constructor(private http: HttpClient) {}

  getGalleryData(): Observable<any> {
    return this.http.get<any>(this.navUrl).pipe(
      map(data => data.gallery)
    );
  }

}
