import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = 'http://localhost:5000';


  constructor(private http: HttpClient, private router: Router) { }

  getDecodedToken() {
    let token: String|null = ""

    if(localStorage) {
      console.log("localStorage")
      token = localStorage.getItem('token');
    }
    if (token) {
      try {
        // On découpe le token en trois parties (header, payload, signature)
        const base64Url = token.split('.')[1];  // Récupère la partie payload
        const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');  // Conversion base64Url -> base64
        const decodedPayload = atob(base64);  // Décodage de la partie payload en base64
        const decodedToken = JSON.parse(decodedPayload);  // On parse la chaîne décodée pour obtenir un objet
  
        return decodedToken;  // Retourne les données du payload (user_id, role, exp, etc.)
      } catch (error) {
        console.error('Token decoding failed', error);
        return null;
      }
    }
    return null;
  }
  

  login(email: string, password: string): Observable<any> {
    const url = `${this.apiUrl}/login`;
    const body = { email, password };
    return this.http.post(url, body);
  }

  // Inscription d'un utilisateur
  register(email: string, password: string, firstName: string, lastName: string): Observable<any> {
    const url = `${this.apiUrl}/register`;
    const body = { email, password, role: "user", firstName, lastName };
    return this.http.post(url, body);
  }
  
  // Vérification d'un token pour une route protégée
  verifyToken(): Observable<any> {
    const url = `${this.apiUrl}/auth/verify`;
    const token = localStorage.getItem('token'); // Récupère le token depuis le localStorage

    if (!token) {
      throw new Error('Token manquant');
    }

    const headers = new HttpHeaders({
      'Authorization': token
    });

    return this.http.get(url, { headers });
  }

    // Déconnexion d'un utilisateur
  logout(): void {
    localStorage.removeItem('token'); // Supprime le token du localStorage
    this.router.navigate(['/login']); // Redirige vers la page de connexion
  }

  // Vérifie si l'utilisateur est connecté
  isLoggedIn(): boolean {
    const token = localStorage.getItem('token');
    return !!token; // Retourne true si le token existe
  }

  getUserRole() {
    return this.getDecodedToken()?.role || '';
  }

  getUser() {
    let user = this.getDecodedToken();
    return user;
  }

}
