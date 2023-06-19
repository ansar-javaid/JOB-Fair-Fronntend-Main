import { Component } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { IUserSignup } from '../../models/user.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {
  public isLoading: boolean = false;
  public errorMessage: string = '';
  public signupData: IUserSignup = {
    firstName: '',
    lastName: '',
    gender: 1,
    email: '',
    password: '',
    confirmPassword: ''
  };

  constructor(private authService: AuthService, private router: Router) { }

  public handleSignup(): void {
    if (!this.signupData.firstName) {
      this.errorMessage = 'Please enter a firstName';
    } else if (!this.isValidEmail(this.signupData.email)) {
      this.errorMessage = 'Please enter a valid email';
    } else if (!this.signupData.password) {
      this.errorMessage = 'Please enter a password';
    } else if (!this.isPasswordValid(this.signupData.password)) {
      this.errorMessage =
        'Password must contain a combination of numeric, character, special character, uppercase, and lowercase';
    } else if (this.signupData.password !== this.signupData.confirmPassword) {
      this.errorMessage = 'Password and Confirm Password do not match';
    } else {
      this.errorMessage = '';
      this.isLoading = true;
      this.authService.register(this.signupData).subscribe(
        (response) => {
          this.isLoading = false;
          if (response.statusCode === 500) {
            console.error('Registration failed:', response.value.message);
            this.errorMessage = response.value.message;

          }
          else if (response.statusCode === 200) {
            console.log('Registration Success:', response.value.message);
            this.errorMessage = response.value.message;
            this.router.navigate(['/login']);

          }
          else {
            console.error('Registration failed:', response);
            this.errorMessage = 'An error occurred. Please try again later.';
          }
        },
        (error) => {
          this.isLoading = false;
          console.error('Registration failed:', error);
          if (error.status === 400) {
            const errorResponse = error.error;
            if (errorResponse && errorResponse.value && errorResponse.value.message) {
              this.errorMessage = errorResponse.value.message;
            } else {
              this.errorMessage = 'User creation failed! Please check user details and try again.';
            }
          } else {
            this.errorMessage = 'An error occurred. Please try again later.';
          }
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




  //Password Validator
  private isPasswordValid(password: string): boolean {
    // Password validation rules
    const numericRegex = /\d/;
    const characterRegex = /[a-zA-Z]/;
    const specialCharacterRegex = /[!@#$%^&*(),.?":{}|<>]/;

    const containsNumeric = numericRegex.test(password);
    const containsCharacter = characterRegex.test(password);
    const containsSpecialCharacter = specialCharacterRegex.test(password);
    const containsUppercase = password !== password.toLowerCase();
    const containsLowercase = password !== password.toUpperCase();

    return (
      containsNumeric &&
      containsCharacter &&
      containsSpecialCharacter &&
      containsUppercase &&
      containsLowercase
    );
  }
}