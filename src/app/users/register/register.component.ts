import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { UsersService } from '../../services/users.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  email: string = '';
  password: string = '';
  confirmPassword: string = '';
  errorMessage: string | null = null;
  firstName: string = '';
  lastName: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  createAccount() {
    if (this.password !== this.confirmPassword) {
      this.errorMessage = "Les mots de passe ne correspondent pas.";
      return;
    }

    this.authService.register(this.email, this.password, this.firstName, this.lastName).subscribe(
      (response) => {
        // Si l'inscription est réussie, rediriger vers la page de connexion
        this.router.navigate(['/login']);
      },
      (error) => {
        // Afficher un message d'erreur si l'inscription échoue
        this.errorMessage = "Erreur lors de la création du compte. Veuillez réessayer.";
      }
    );
  }
    
}
