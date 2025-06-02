import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NewsService } from '../../services/news.service';
import { Router, RouterModule } from '@angular/router';
import { News } from '../../models/news';
import { MatDialog } from '@angular/material/dialog';
import { AuthService } from '../../services/auth.service';
import { ModalComponent } from '../../shared/modal/modal.component';
import { Picture } from '../../models/images';

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
  hoveredItem: string | null = null;

  fields = { name: '', email: '' };
    constructor(public authService: AuthService, private dialog: MatDialog, private newsService: NewsService, private router: Router) {}

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

  getCoverPicture(newContent: any[]): Picture {
    // newsItem.pictures && newsItem.pictures.length > 0 ? newsItem.pictures[0].link
    let picture = {url : "https://api.cacard.fr/uploads/basePicture/image_acceuil.png"} as Picture 
    newContent.find((item: any) => {
      if (item.type == "image" && item.isCover) {
        picture = item;
      }
    })
    return picture;
  }

  getNumberOfNewsItems(isDraft: boolean) {
    return isDraft ? this.news.newItems.filter((item: any) => item.isDraft).length : this.news.newItems.filter((item: any) => !item.isDraft).length;

  }

  openAddNewsModal() {
    const dialogRef = this.dialog.open(ModalComponent, {
      width: '600px',
      data: {
        title: 'Ajouter une nouvelle actualité',
        fields: [
          { name: 'title', label: 'Titre', type: 'text', required: true },
          { name: 'summary', label: 'Résumé', type: 'text', required: true },
          { name: 'author', label: 'Auteur', type: 'text', required: true },
          { name: 'picture', label: 'Image', type: 'file', required: false },
          { name: 'publishDate', label: 'Date de publication', type: 'date', required: false },
          { name: 'isDraft', label: 'Brouillon', type: 'checkbox', required: false }
        ]
      }
    });
  
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        const formData = new FormData();
        formData.append('title', result.title);
        formData.append('summary', result.summary);
        formData.append('author', result.author);
        formData.append('isDraft', result.isDraft);
        if (result.picture) {
          formData.append('picture', result.picture);
        }
        if (result.publishDate) {
          formData.append('publishDate', result.publishDate);
        }
        
        // this.newsService.createNews(formData).subscribe(() => {
        //   this.ngOnInit(); // Recharge les news
        // });
      }
    });
  }

  editNews(id: string) {
    this.router.navigate(['/news-detail', id]);
  }

  deleteNews(id: string) {
    if (confirm('Êtes-vous sûr de vouloir supprimer cet article ?')) {
      this.newsService.deleteNews(id).subscribe(() => {
        this.ngOnInit(); // Recharge les données après suppression
      });
    }
  }
  
  

  
  createNewArticle() {
    this.newsService.createEmptyNews().subscribe((res: any) => {
      window.location.reload(); // Recharge la page après la création de l'article
    });
  }

}
