import { Component } from '@angular/core';
import { IResume } from 'src/app/features/models/resume.model';
import { ResumeService } from '../../services/resume.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-display-resume',
  templateUrl: './display-resume.component.html',
  styleUrls: ['./display-resume.component.scss']
})
export class DisplayResumeComponent {
  public declare resumeData: IResume;
  public dataLoaded: boolean = false;
  public email: string | null = ''
  
  constructor(
    private resumeService: ResumeService, 
    private router: Router,
    private route: ActivatedRoute,
    ){}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      // this.id = +params['id'];
      this.resumeService.getResumeData(params['id']).subscribe((data: IResume) => {
        this.resumeData = data;
        this.dataLoaded = true;
        this.email = this.resumeService.getStudentEmail() ? this.resumeService.getStudentEmail() : localStorage.getItem('email');
      });
    });
  }

  public printResume(): void {
    window.print()
  }

  public goToBuildResume(): void {
    if(this.resumeService.getStudentEmail()) {
      this.router.navigate(['view-students'])
    } else {
      this.router.navigate(['build-resume']);
    }
  }
}
