import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { NewItem, News } from '../models/news';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  private newsUrlApi = 'http://localhost:5000/news';

  constructor(private http: HttpClient, private router: Router) { }

  getNews(): Observable<News> {
    return this.http.get<News[]>(this.newsUrlApi).pipe(
      map(data => data[0])
    );
  }

  getNewsById(id: string): Observable<NewItem> {
    return this.getNews().pipe(
      map(news => news.newItems.find((news: any) => news._id === id) || {} as NewItem)
    );
  }

  updateLikes(id: string): Observable<any> {
    return this.http.get<any>(this.newsUrlApi).pipe(
      map(data => {
        const newsItem = data.news.news.find((n: any) => n.id === id);
        if (newsItem) {
          newsItem.likes += 1;
          this.http.put(this.newsUrlApi, data).subscribe();
        }
        return newsItem;
      })
    );
  }

  navigateToNews(id: string) {
    this.router.navigate(['/news', id]);
  }
}
