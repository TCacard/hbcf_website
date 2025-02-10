import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NewsService } from '../../services/news.service';
import { Router, RouterModule } from '@angular/router';
import { News } from '../../models/news';
import { MatDialog } from '@angular/material/dialog';
import { AuthService } from '../../services/auth.service';
import { ModalComponent } from '../../shared/modal/modal.component';

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

  news: News = {} as News;
  fields = { name: '', email: '' };
    constructor(public authService: AuthService, private dialog: MatDialog, private newsService: NewsService) {}

  ngOnInit(): void {
    this.newsService.getNews().subscribe((news: News) => {
      this.news = news;
      this.orderNewsByDate();
    });
  }

  orderNewsByDate() {
    this.news.newItems.sort((a: any, b: any) => new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime());
  }

  navigateToNews(id: string) {
    this.newsService.navigateToNews(id);
  }

  openAddNewsModal() {
    const dialogRef = this.dialog.open(ModalComponent, {
      width: '400px',
      data: {
        title: 'Ajouter une nouvelle actualité',
        fields: [
          { name: 'title', label: 'Titre', type: 'text', required: true },
          { name: 'summary', label: 'Résumé', type: 'text', required: true },
          { name: 'author', label: 'Auteur', type: 'text', required: true },
          { name: 'picture', label: 'Image', type: 'file', required: false },
          { name: 'publishDate', label: 'Date de publication', type: 'date', required: true }
        ]
      }
    });
  
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        console.log('Nouvelle actualité ajoutée', result);
      }
    });
  }
}
