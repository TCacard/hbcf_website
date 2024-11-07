import { Component } from '@angular/core';
import { GalleryService } from '../services/gallery.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-galerie',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './galerie.component.html',
  styleUrl: './galerie.component.scss'
})
export class GalerieComponent {
  photos: any[] = [];
  galleryName: string = '';
  randomPhotos: any[] = [];

  constructor(private galleryService: GalleryService) {}

  ngOnInit(): void {
    this.galleryService.getGalleryData().subscribe((data: any) => {
      this.galleryName = data.title;
      this.photos = data.photos;
      this.getRandomPhotos();
    });
  }


  getRandomPhotos(): void {
    if (this.photos.length <= 4) {
      this.randomPhotos = [...this.photos];
    } else {
      const shuffled = [...this.photos].sort(() => 0.5 - Math.random());
      this.randomPhotos = shuffled.slice(0, 4);
    }
  }

  currentSlide: number = 0;

  prevSlide(): void {
    this.currentSlide = (this.currentSlide - 1 + this.randomPhotos.length) % this.randomPhotos.length;
    console.log(this.currentSlide);
  }

  nextSlide(): void {
    this.currentSlide = (this.currentSlide + 1) % this.randomPhotos.length;
    console.log(this.currentSlide);
  }

  goToSlide(index: number): void {
    this.currentSlide = index;
    console.log(this.currentSlide);
  }

  navigateToPhoto(link: string): void {
    window.open(link, '_blank');
  }
}
