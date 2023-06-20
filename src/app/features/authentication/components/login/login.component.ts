import { Component } from '@angular/core';
import { ILogin } from '../../models/user.model';
import { AuthService } from 'src/app/auth/auth.service';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  public errorMessage: string = '';
  public isLoading: boolean = false;
  email = '';
  password = '';

  constructor(private authService: AuthService, private router: Router, private jwtHelper: JwtHelperService, private snackBar: MatSnackBar) { }

  login(): void {
    if (!this.isValidEmail(this.email)) {
      this.errorMessage = 'Please enter a valid email';
    }
    else if (!this.password) {
      this.errorMessage = 'Please enter password';
    }
    else {
      this.isLoading = true;
      const credentials = {
        email: this.email,
        password: this.password,
      };

      this.authService.login(credentials).subscribe(
        (response) => {
          this.isLoading = false;
          if (response.statusCode === 200) {
           this.showNotification('Login successful')
            const token = response.value.token;
            localStorage.setItem('access_token', token);
            const decodedToken = this.jwtHelper.decodeToken(token);
            const role = decodedToken['http://schemas.microsoft.com/ws/2008/06/identity/claims/role'];
            const profileID=decodedToken['http://schemas.microsoft.com/ws/2008/06/identity/claims/userdata'];
            const email= decodedToken['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/emailaddress'];
            localStorage.setItem('profileID', profileID);
            localStorage.setItem('email', email);
            if (role === 'User') {
              console.log("Success: 200:OK")
              this.router.navigate(['/build-resume']);
            } else if (role === 'Admin') {
              // Redirect to another page based on the role (if needed)
              // this.router.navigate(['/Admin']);
            }
            else if (role === 'Super') {
              // Redirect to another page based on the role (if needed)
              // this.router.navigate(['/Super']);
            }
          } else if (response.statusCode === 401) {
            this.showNotification('Login failed, please check your credentials');
            console.log("NotFound")
            localStorage.clear();
          }
          else {
            console.error('Login failed: Role Error', response);
            this.showNotification('Login failed');
            this.errorMessage = response.value;
            //Clear the Storage
            localStorage.clear();
          }
        },
        (error) => {
          this.isLoading = false;
          console.error('Login failed: Server error:', error);
          const errorResponse = error.error;
          this.errorMessage = "ddddddddd";
          // Handle login error
          //Clear the Storage
          localStorage.clear();
        }
      );
    }
  }

  //Email Validator
  private isValidEmail(email: string): boolean {
    // Email validation rule using regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  private showNotification (message: string) {
    this.snackBar.open(message, 'Close', {
      horizontalPosition: 'end',
      verticalPosition: 'top'
    })
  }

}