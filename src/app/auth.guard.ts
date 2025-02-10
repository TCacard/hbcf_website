import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthService } from './services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    // Si l'utilisateur est connecté, on redirige vers la page de profil s'il essaie d'accéder à login ou register
    if (this.authService.isLoggedIn()) {
      if (state.url === '/login' || state.url === '/register') {
        this.router.navigate(['/profile']);
        return false;
      }
      return true;  // Si l'utilisateur est connecté, il peut accéder à la route protégée
    }

    // Si l'utilisateur n'est pas connecté et tente d'accéder à des pages protégées, on le redirige vers login
    if (state.url !== '/login' && state.url !== '/register') {
      this.router.navigate(['/login']);
      return false;
    }

    return true;
  }
}
