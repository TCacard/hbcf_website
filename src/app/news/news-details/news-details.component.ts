import { Component, OnInit } from '@angular/core';
import { NewsService } from '../../services/news.service';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { NewItem } from '../../models/news';

@Component({
  selector: 'app-news-details',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './news-details.component.html',
  styleUrl: './news-details.component.scss'
})
export class NewsDetailsComponent implements OnInit {

  news: any;
  isShareMenuOpen = false;
  constructor(private newsService: NewsService, private route: ActivatedRoute, private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.newsService.getNewsById(this.route.snapshot.params['id']).subscribe((newItem: NewItem) => {
      this.news = newItem;
    });
  }

  getSafeHtml(content: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(content);
  }

  updateLikes(id: string) {
    this.newsService.updateLikes(id).subscribe();
  }

  toggleShareMenu() {
    this.isShareMenuOpen = !this.isShareMenuOpen;
  }

  shareOnWhatsapp() {
    window.open(`https://wa.me/?text=${encodeURIComponent(`Découvrez cet article : ${this.news.title} - ${window.location.href}`)}`, '_blank');
  }

  shareOnFacebook() {
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}&quote=${encodeURIComponent(`Découvrez cet article : ${this.news.title}`)}`, '_blank');
  }

  shareOnInstagram() {
    window.open(`https://www.instagram.com/direct/inbox?text=${encodeURIComponent(`Découvrez cet article : ${this.news.title} - ${window.location.href}`)}`, '_blank');
  }

  downloadFile(filename: string) {
    fetch(`../../../assets/pdfs/${filename}`)
      .then(response => response.blob())
      .then(blob => {
        const url = window.URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = filename;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        window.URL.revokeObjectURL(url);
      });
  }
}
