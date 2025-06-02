import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private apiUrlRegister = 'https://api.cacard.fr/register'
  private apiUrlLogin = 'https://api.cacard.fr/login'

  constructor(private http: HttpClient, private router: Router) { }

  createUser(userData: any){
    this.http.post(this.apiUrlRegister, userData)
      .subscribe(
        (response) => {
          console.log('Utilisateur enregistré', response);
          this.router.navigate(['/login']);  // Redirige vers la page de login
        },
        (error) => {
          console.error('Erreur d\'enregistrement', error);
        }
      );
  }

  userLogin(userData: any) {
    this.http.post(this.apiUrlLogin, userData)
    .subscribe(
      (response) => {
        console.log("Utilisateur connecté", response)
        this.router.navigate(["/accueil"])   
      }
    )
  }
}


