import { Component, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IAwards } from '../../../../models/resume.model';
import { MatStepper } from '@angular/material/stepper';

@Component({
  selector: 'app-awards',
  templateUrl: './awards.component.html',
  styleUrls: ['./awards.component.scss']
})
export class AwardsComponent {
  @Input() heading: string = '';
  @Input() declare stepper: MatStepper;

  public dummyAwardData: IAwards = {
    name: '',
    description: ''
  };
  public awardData: Array<IAwards> = [
    {
      name: '',
      description: ''
    }
  ];

  constructor(private http: HttpClient) { }

  public addNewFields(): void {
    this.awardData.push(JSON.parse(JSON.stringify(this.dummyAwardData)));
  }

  public deleteAwardItem(index: number): void {
    this.awardData.splice(index, 1);
  }

  public saveAndNext(): void {
    for (const awardItem of this.awardData) {
      const awardDetail = {
        profileId: localStorage.getItem('profileID'),
        name: awardItem.name,
        description: awardItem.description
      };

      const token = localStorage.getItem('access_token');

      this.http.post('https://sdcportalapijob23.azurewebsites.net/api/Profile/AddAwardDetails', awardDetail, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      }).subscribe(
        (res) => {
          // Handle success response
          this.stepper.next()
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
