import { Component, OnInit } from '@angular/core';
import { ContactService } from '../services/contact.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent implements OnInit{
  contact: any;

  formData = {
    lastname: '',
    firstname: '',
    message: ''
  };

  constructor(private contactService: ContactService) {
  }

  ngOnInit(): void {
    this.contactService.getClubHistory().subscribe(data => {
      this.contact = data;
    });
  }

  onSubmit() {
    this.contactService.sendEmail(this.formData).subscribe(
      response => {
        console.log('Email envoyé avec succès', response);
        // Ajouter ici la logique pour informer l'utilisateur
      },
      error => {
        console.error('Erreur lors de l\'envoi', error);
        // Ajouter ici la gestion des erreurs
      }
    );
  }
}
