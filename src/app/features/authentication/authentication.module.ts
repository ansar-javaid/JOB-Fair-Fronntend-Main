import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { FormsModule } from '@angular/forms';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import {MatSnackBarModule} from '@angular/material/snack-bar';



@NgModule({
  declarations: [
    LoginComponent,
    SignupComponent,
    ForgotPasswordComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    AppRoutingModule,
    MatSnackBarModule
  ]
})
export class AuthenticationModule { }
