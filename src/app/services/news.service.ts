import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  private newsUrl = 'assets/data.json';

  constructor(private http: HttpClient) { }

  getNews(): Observable<any> {
    return this.http.get<any>(this.newsUrl).pipe(
      map(data => data.news)
    );
  }

  getNewsById(id: number): Observable<any> {
    return this.getNews().pipe(
      map(news => news.news.find((news: any) => news.id === id))
    );
  }

  updateLikes(id: string): Observable<any> {
    return this.http.get<any>(this.newsUrl).pipe(
      map(data => {
        const newsItem = data.news.news.find((n: any) => n.id === id);
        if (newsItem) {
          newsItem.likes += 1;
          this.http.put(this.newsUrl, data).subscribe();
        }
        return newsItem;
      })
    );
  }
}
