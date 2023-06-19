import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private jwtHelper: JwtHelperService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const token = localStorage.getItem('access_token');
    if (token) {
      const decodedToken = this.jwtHelper.decodeToken(token);
      const role = decodedToken['http://schemas.microsoft.com/ws/2008/06/identity/claims/role'];
      if (role === 'User' && (state.url === '/build-resume' || state.url === '/view-resume')) {
        return true; // Allow access to "build-resume" and "view-resume" pages for users with "User" role
      } else {
        this.router.navigate(['/login']); // Redirect to login page for unauthorized access or other roles
        return false;
      }
    } else {
      this.router.navigate(['/login']); // Redirect to login page for unauthenticated users
      return false;
    }
  }
}
