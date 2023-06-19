import { Component, Input } from '@angular/core';
import { IAwards, ICertification, IEducation, IReferences, ISkill, IWork } from 'src/app/features/models/resume.model';

@Component({
  selector: 'app-display-details',
  templateUrl: './display-details.component.html',
  styleUrls: ['./display-details.component.scss']
})
export class DisplayDetailsComponent {
  @Input() declare workExperience:IWork;
  @Input() declare education: IEducation;
  @Input() declare skill: ISkill;
  @Input() declare certification: ICertification;
  @Input() declare award: IAwards;
  @Input() declare references: IReferences;

  public title: string = '';
  public from: string = '';
  public start: string = '';
  public end: string = '';

  public ngOnInit(): void {
    if (this.workExperience) {
     this.setWorkData(this.workExperience);
    } else if (this.education) {
      this.setEducationData(this.education);
    } else if (this.skill) {
      this.setSkillData(this.skill);
    } else if (this.certification) {
      this.setCertificationData(this.certification);
    } else if (this.award) {
      this.setAwardsData(this.award);
    } else if (this.references) {
      this.setReferencesData(this.references);
    }
  }

  private setWorkData(dapta: IWork): void {
    this.title = this.workExperience.jobRole;
    this.from = this.workExperience.organization;
    this.start = this.workExperience.start;
    this.end = this.workExperience.end;
  }

  private setEducationData(data: IEducation): void {
    this.title = this.education.major;
    this.from = this.education.instituteName;
    this.start = this.education.start;
    this.end = this.education.end;
  }

  private setSkillData(data: ISkill): void {
    this.title = this.skill.name
  }

  private setCertificationData(data: ICertification): void {
    this.title = data.organization;
    this.from = data.organization;
    this.end = data.end;
  }

  private setAwardsData(data: IAwards): void {
    this.title = data.name;
    this.end = data.description;
  }

  private setReferencesData(data: IReferences): void {
    this.title = data.name;
    this.from = data.email;
    this.end = data.phoneNumber;
  }
}
