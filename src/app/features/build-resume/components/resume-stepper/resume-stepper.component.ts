import { Component } from '@angular/core';
import {BreakpointObserver} from '@angular/cdk/layout';
import {StepperOrientation} from '@angular/material/stepper';
import { Observable, map } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from 'src/app/shared/shared/components/dialog/dialog.component';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-resume-stepper',
  templateUrl: './resume-stepper.component.html',
  styleUrls: ['./resume-stepper.component.scss']
})
export class ResumeStepperComponent {

  stepperOrientation: Observable<StepperOrientation>;

  constructor(breakpointObserver: BreakpointObserver, private dialog: MatDialog, private router: Router, private authService: AuthService) {
    this.stepperOrientation = breakpointObserver
      .observe('(min-width: 800px)')
      .pipe(map(({matches}) => (matches ? 'horizontal' : 'vertical')));
  }

  public buildResume() {
    const dialogRef = this.dialog.open(DialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.router.navigate(['view-resume'])
      }
    });
  }

  public logout() {
    this.authService.logout()
    this.router.navigate(['/'])
  }
}
