import { Component } from '@angular/core';
import {BreakpointObserver} from '@angular/cdk/layout';
import {StepperOrientation} from '@angular/material/stepper';
import { Observable, map } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from 'src/app/shared/shared/components/dialog/dialog.component';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';
import { ResumeService } from 'src/app/features/view-resume/services/resume.service';

@Component({
  selector: 'app-resume-stepper',
  templateUrl: './resume-stepper.component.html',
  styleUrls: ['./resume-stepper.component.scss']
})
export class ResumeStepperComponent {

  stepperOrientation: Observable<StepperOrientation>;

  constructor(
    private breakpointObserver: BreakpointObserver,
    private dialog: MatDialog,
    private router: Router,
    private authService: AuthService,
    private resumeService: ResumeService) {
    this.stepperOrientation = breakpointObserver
      .observe('(min-width: 800px)')
      .pipe(map(({matches}) => (matches ? 'horizontal' : 'vertical')));
  }

  public buildResume() {
    const dialogRef = this.dialog.open(DialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.resumeService.removeStudentEmail();
        this.router.navigate(['view-resume', this.resumeService.getProfileId()] )
      }
    });
  }

  public viewResume(): void {
    this.resumeService.removeStudentEmail();
    this.router.navigate(['view-resume', this.resumeService.getProfileId()] ) 
  }

  public logout() {
    this.authService.logout()
    this.router.navigate(['/'])
  }
}
