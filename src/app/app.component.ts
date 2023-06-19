import { Component, OnInit } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private jwtHelper: JwtHelperService, private router: Router) {}

  ngOnInit(): void {
    const token = localStorage.getItem('access_token');
    if (token && !this.jwtHelper.isTokenExpired(token)) {
      const decodedToken = this.jwtHelper.decodeToken(token);
      const role = decodedToken['http://schemas.microsoft.com/ws/2008/06/identity/claims/role'];
      if (role === 'User') {
        // Redirect to the build-resume page
        this.router.navigate(['/build-resume']);
      } else if (role === 'Admin') {
        // Redirect to another page based on the role (if needed)
        // this.router.navigate(['/Admin']);
      }
      else if (role === 'Super') {
        // Redirect to another page based on the role (if needed)
        // this.router.navigate(['/Super']);
      }
    } else {
      // Token is invalid or not present, redirect to login page
      this.router.navigate(['/login']);
    }
  }
}
