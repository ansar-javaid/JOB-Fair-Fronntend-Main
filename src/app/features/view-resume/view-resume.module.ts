import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DisplayResumeComponent } from './components/display-resume/display-resume.component';
import { DisplayPersonalComponent } from './components/display-resume-components/display-personal/display-personal.component';
import { DisplayDetailsComponent } from './components/display-resume-components/display-details/display-details.component';
import { ResumeService } from './services/resume.service';
import { AuthGuard } from 'src/app/auth/auth.guard';
import { SharedModule } from 'src/app/shared/shared/shared.module';



@NgModule({
  declarations: [
    DisplayResumeComponent,
    DisplayPersonalComponent,
    DisplayDetailsComponent,
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  providers: [AuthGuard,ResumeService]
})
export class ViewResumeModule { }
