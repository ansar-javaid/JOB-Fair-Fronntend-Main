import { Component } from '@angular/core';
import { IResume } from 'src/app/features/models/resume.model';
import { ResumeService } from '../../services/resume.service';

@Component({
  selector: 'app-display-resume',
  templateUrl: './display-resume.component.html',
  styleUrls: ['./display-resume.component.scss']
})
export class DisplayResumeComponent {
  public declare resumeData: IResume;
  public dataLoaded: boolean = false;
  public email: string | null = ''
  
  constructor(private resumeService: ResumeService){}

  ngOnInit(): void {
    this.resumeService.getResumeData(this.resumeService.getProfileId()).subscribe((data: IResume) => {
      this.resumeData = data;
      this.dataLoaded = true;
      this.email = localStorage.getItem('email')
    });
  }
}