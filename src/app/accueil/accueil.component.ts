import { Component, OnInit } from '@angular/core';
import { NewsService } from '../services/news.service';
import { EventDataService } from '../services/event.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-accueil',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './accueil.component.html',
  styleUrl: './accueil.component.scss'
})
export class AccueilComponent implements OnInit{

constructor(private newsService: NewsService, private eventService: EventDataService) {}

  news: any;
  events: any;
  combinedItems: any;
  
  ngOnInit(): void {
    this.newsService.getNews().subscribe((data) => {
      this.news = data;
    });
    this.eventService.getEventData().subscribe((data) => {
      this.events = data;
    });
    this.combineNewsAndEvents();
  }

  combineNewsAndEvents(): void {
    const randomNews = this.news.news
      .sort(() => Math.random() - 0.5)
      .slice(0, 2);

    const randomEvents = this.events
      .sort(() => Math.random() - 0.5)
      .slice(0, 2);

    this.combinedItems = [...randomNews, ...randomEvents]
      .sort(() => Math.random() - 0.5);

    console.log(this.combinedItems);
  }

  currentIndex = 0;
  
  nextSlide(): void {
    this.currentIndex = (this.currentIndex + 1) % this.combinedItems.length;
    this.updateCarousel();
  }

  prevSlide(): void {
    this.currentIndex = (this.currentIndex - 1 + this.combinedItems.length) % this.combinedItems.length;
    this.updateCarousel();
  }

  private updateCarousel(): void {
    const carousel = document.querySelector('.carousel') as HTMLElement;
    if (carousel) {
      carousel.style.transform = `translateX(-${this.currentIndex * 100}%)`;
    }
  }



}
