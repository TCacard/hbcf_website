import { Component } from '@angular/core';
import { InscriptionPageService } from '../services/inscription-page.service';
import { InscriptionItem, InscriptionPage } from '../models/inscriptionPage';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-inscription',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './inscription.component.html',
  styleUrl: './inscription.component.scss'
})
export class InscriptionComponent {
  inscriptionPage: InscriptionPage = {} as InscriptionPage;

  constructor(private inscriptionService: InscriptionPageService) {}

  ngOnInit(): void {
    this.inscriptionService.getInscriptionPage().subscribe((inscriptionPage: InscriptionPage) => {
      this.inscriptionPage = inscriptionPage;
      this.inscriptionPage.parts.sort((a: InscriptionItem, b: InscriptionItem) => a.order - b.order);
    });
  }


  navigateToForm(link:string) {
    window.open(link, '_blank');
  }

}
