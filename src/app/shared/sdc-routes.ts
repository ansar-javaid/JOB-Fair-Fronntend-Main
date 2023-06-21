import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from "../features/authentication/components/login/login.component";
import { SignupComponent } from "../features/authentication/components/signup/signup.component";
import { ForgotPasswordComponent } from "../features/authentication/components/forgot-password/forgot-password.component";
import { ResumeStepperComponent } from "../features/build-resume/components/resume-stepper/resume-stepper.component";
import { DisplayResumeComponent } from "../features/view-resume/components/display-resume/display-resume.component";
import { AuthGuard } from "../auth/auth.guard";
import { ViewStudentsComponent } from '../features/admin/components/view-students/view-students.component';

export const sdcRoutes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'build-resume', component: ResumeStepperComponent, canActivate: [AuthGuard] },
  { path: 'view-resume/:id', component: DisplayResumeComponent, canActivate: [AuthGuard] },
  { path: 'view-students', component: ViewStudentsComponent, canActivate: [AuthGuard] },
  { path: '**', redirectTo: 'login' } // Redirect to login page for unknown routes
];
