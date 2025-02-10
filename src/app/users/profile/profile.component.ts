import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent {
  email: string = '';
  firstName: string = '';
  lastName: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    const token = localStorage.getItem('token');
    if (token) {
      const decodedToken = this.authService.getDecodedToken()
      this.email = decodedToken.email;
      this.firstName = decodedToken.firstName;
      this.lastName = decodedToken.lastName;
    }
  }

  logout(): void {
    this.authService.logout();
    window.location.reload();
  }
}
