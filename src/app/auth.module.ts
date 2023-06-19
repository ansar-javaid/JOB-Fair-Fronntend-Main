import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JwtModule } from '@auth0/angular-jwt';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from './auth/auth.service';
import { JwtHelperService } from '@auth0/angular-jwt';

export function tokenGetter() {
  return localStorage.getItem('access_token');
}

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        allowedDomains: ['rabbaniyeh-001-site1.atempurl.com'],
        disallowedRoutes: ['rabbaniyeh-001-site1.atempurl.com/api/auth/Login'],
      },
    }),
  ],
  providers: [AuthService, JwtHelperService],
})
export class AuthModule {}
