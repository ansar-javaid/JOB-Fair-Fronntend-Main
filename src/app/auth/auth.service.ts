import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    private http: HttpClient,
    private jwtHelper: JwtHelperService
  ) {}


  login(credentials: any): Observable<any> {
    return this.http.post<any>('https://sdcportalapijob23.azurewebsites.net/api/auth/Login', credentials);
  }

  register(user: any): Observable<any> {
    return this.http.post<any>('https://sdcportalapijob23.azurewebsites.net/api/auth/Register', user);
  }

  logout(): void {
    localStorage.removeItem('access_token');
  }

  isAuthenticated(): boolean {
    const token = localStorage.getItem('access_token');
    return !this.jwtHelper.isTokenExpired(token);
  }

  getAccessToken(): string | null {
    return localStorage.getItem('access_token');
  }
}
