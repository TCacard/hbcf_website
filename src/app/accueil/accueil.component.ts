import { AfterViewInit, Component, OnInit } from '@angular/core';
import { NewsService } from '../services/news.service';
import { EventDataService } from '../services/event.service';
import { CommonModule } from '@angular/common';
import { NewItem, News } from '../models/news';
import { Picture } from '../models/images';
import { AccueilService } from '../services/accueil.service';
import { AccueilPage } from '../models/accueil';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-accueil',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule
  ],
  templateUrl: './accueil.component.html',
  styleUrl: './accueil.component.scss'
})
export class AccueilComponent implements OnInit{

  constructor(private newsService: NewsService, private accueilService: AccueilService, private router: RouterModule) {

  }

  news: News = {} as News;
  newItem: NewItem[] = [];
  events: any;
  combinedItems: any;
  accueilData: AccueilPage = {} as AccueilPage;
  logohbcf: Picture = {} as Picture
  image_accueil: Picture = {} as Picture;
  newPictures: Picture[] = [];
  
  ngOnInit(): void {
    this.newsService.getNews().subscribe((news) => {
      this.newItem = news.newItems.filter(newItem => newItem.importance === 3);
      this.getNewPicture(this.newItem)
    });
    this.accueilService.getAccueilData().subscribe((accueilData) => {
      this.accueilData = accueilData
      this.getLogo(this.accueilData.pictures)
      this.getImageAccueil(this.accueilData.pictures)
    })
  }

  getNewPicture(newItems: NewItem[]){
    this.newPictures = newItems.flatMap(item => item.pictures).filter(picture => picture.front === true);
  }

  getLogo(pictures: Picture[]) {
    const regex = /\blogo\b/i;
    const result = pictures.find(picture => regex.test(picture.name ? picture.name : ""));
    if (!result) {
      throw new Error("Aucune image avec 'logo' trouvée !");
    }
    this.logohbcf = result;
  }

  getImageAccueil(pictures: Picture[]){
    const regex = /\bimage_accueil\b/i;
    const result = pictures.find(picture => regex.test(picture.name ? picture.name : ""));
    if (!result) {
      throw new Error("Aucune image avec image_accueil trouvée !")
    }
    this.image_accueil = result
  }

  currentSlide: number = 0;

  prevSlide(): void {
    this.currentSlide = (this.currentSlide - 1 + this.news.newItems.length) % this.news.newItems.length;
    console.log(this.currentSlide);
  }

  nextSlide(): void {
    this.currentSlide = (this.currentSlide + 1) % this.news.newItems.length;
    console.log(this.currentSlide);
  }

  goToSlide(index: number): void {
    this.currentSlide = index;
    console.log(this.currentSlide);
  }

  navigateToNews(id:string){
    this.newsService.navigateToNews(id)
  }
}
