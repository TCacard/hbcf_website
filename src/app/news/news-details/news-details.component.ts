import { Component, ElementRef, OnInit, QueryList, ViewChildren } from '@angular/core';
import { NewsService } from '../../services/news.service';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { NewItem } from '../../models/news';
import { AuthService } from '../../services/auth.service';
import { FormsModule } from '@angular/forms';
import { Picture } from '../../models/images';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';

@Component({
  selector: 'app-news-details',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    CKEditorModule
  ],
  templateUrl: './news-details.component.html',
  styleUrl: './news-details.component.scss'
})
export class NewsDetailsComponent implements OnInit {  

  public Editor: any = null;
  uploadedImages: { [index: number]: File } = {};


  public editorConfig = {
    toolbar: ['bold', 'italic', 'link', 'bulletedList', 'numberedList', 'undo', 'redo']
  };
  news: any;
  isShareMenuOpen = false;

  isAdmin = false;
  isEditing = true;
  dragIndex: number | null = null;

  constructor(private newsService: NewsService, private route: ActivatedRoute, private sanitizer: DomSanitizer, public authService: AuthService) { }

  ngOnInit(): void {
    if (typeof window !== 'undefined') {
      import('@ckeditor/ckeditor5-build-classic').then((module) => {
        this.Editor = module.default;
      });
    }

    this.newsService.getNewsById(this.route.snapshot.params['id']).subscribe((newItem: NewItem) => {
      this.news = newItem;
    });
  }

  // <textarea *ngIf="isEditing" [(ngModel)]="block.text"></textarea>


  toggleEdit() {
    this.isEditing = !this.isEditing;
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

  publishNews() {
    this.newsService.updateNews(this.news._id, {
      isDraft: false,
      publishDate: new Date().toISOString()
    }).subscribe(() => {
      this.news.isDraft = false;
    });
  }


  addBlock(type: string) {
    const newBlock: any = { type };
    if (type === 'text' || type === 'quote') newBlock.value = '';
    if (type === 'image') newBlock.src = ''; newBlock.alt = '';
    if (type === 'date') newBlock.value = new Date().toISOString();
  
    this.news.content = this.news.content || [];
    this.news.content.push(newBlock);
  }

  saveChanges() {
    const formData = new FormData();
  
    // Convertir l’objet sans _id (comme dans ton backend)
    const cleanNews = { ...this.news };
    delete cleanNews._id;
  
    formData.append('data', JSON.stringify(this.news));

    // Ajouter les fichiers image liés
    for (const [indexStr, file] of Object.entries(this.uploadedImages)) {
      formData.append('image', file); // tu peux aussi faire image-${index} si besoin
    }
  
    this.newsService.updateNews(this.news._id, formData).subscribe(() => {
      this.isEditing = false;
      this.uploadedImages = {}; // réinitialiser les fichiers
    });
  }
  

  cancelChanges() {
    this.newsService.getNewsById(this.news._id).subscribe((newItem: NewItem) => {
      this.news = newItem;
      this.isEditing = false;
    });
  }

  removeBlock(index: number) {
    const confirmDelete = confirm("Es-tu sûr de vouloir supprimer ce bloc ?");
    if (confirmDelete) {
      this.news.content.splice(index, 1);
    }
  }

  onDragStart(index: number) {
    this.dragIndex = index;
  }

  onDrop(event: DragEvent, dropIndex: number) {
    event.preventDefault();
    if (this.dragIndex === null || this.dragIndex === dropIndex) return;
  
    const draggedBlock = this.news.content.splice(this.dragIndex, 1)[0];
    this.news.content.splice(dropIndex, 0, draggedBlock);
    this.dragIndex = null;
  }

  onDragOver(event: DragEvent) {
    event.preventDefault();
  }

  @ViewChildren('fileInput') fileInputs!: QueryList<ElementRef<HTMLInputElement>>;

triggerFileInput(index: number) {
  const fileInput = this.fileInputs.get(index);
  fileInput?.nativeElement.click();
}

handleImageUpload(event: Event, index: number) {
  const input = event.target as HTMLInputElement;
  const file = input.files?.[0];
  if (!file) return;

  const previewUrl = URL.createObjectURL(file);
  this.news.content[index].url = file.name; // nom utilisé comme identifiant
  this.uploadedImages[index] = file; // stocker le fichier pour l'envoyer plus tard
}


  
  
  
}
