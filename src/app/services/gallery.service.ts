import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Gallery } from '../models/gallery';

@Injectable({
  providedIn: 'root'
})
export class GalleryService {
  private galleryUrl = 'http://localhost:5000/gallery';

  constructor(private http: HttpClient) {}

  getGalleryData(): Observable<Gallery> {
    return this.http.get<Gallery[]>(this.galleryUrl).pipe(
      map(galleries => galleries[0])
    );
  }
}
