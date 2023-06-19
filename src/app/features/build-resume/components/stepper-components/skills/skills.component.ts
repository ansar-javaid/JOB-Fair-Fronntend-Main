import { Component, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ISkill } from '../../../../models/resume.model';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent {
  @Input() heading: string = '';
  public dummySkillData: ISkill = {
    name: ''
  };
  public skillData: Array<ISkill> = [
    {
      name: ''
    }
  ];

  constructor(private http: HttpClient) { }

  public addNewFields(): void {
    this.skillData.push(JSON.parse(JSON.stringify(this.dummySkillData)));
  }

  public deleteSkillItem(index: number): void {
    this.skillData.splice(index, 1);
  }

  public saveAndNext(): void {
    for (const skillItem of this.skillData) {
      const skillDetail = {
        profileId: localStorage.getItem('profileID'),
        name: skillItem.name
      };

      const token = localStorage.getItem('access_token');

      this.http.post('https://sdcportalapijob23.azurewebsites.net/api/Profile/AddSkillDetails', skillDetail, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      }).subscribe(
        (res) => {
          // Handle success response
          console.log(res);
        },
        (err) => {
          // Handle error response
          console.error(err);
        }
      );

    }
  }
}
