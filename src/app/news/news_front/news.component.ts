import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NewsService } from '../../services/news.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-news',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './news.component.html',
  styleUrl: './news.component.scss'
})
export class NewsComponent implements OnInit {

  news: any;
  
  constructor(private newsService: NewsService, private router: Router) { }

  ngOnInit(): void {
    this.newsService.getNews().subscribe((data: any) => {
      this.news = data;
    });
    this.orderNewsByDate();
  }

  orderNewsByDate() {
    this.news.sort((a: any, b: any) => new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime());
  }

  navigateToNews(id: number) {
    this.router.navigate(['/news', id]);
  }
}
