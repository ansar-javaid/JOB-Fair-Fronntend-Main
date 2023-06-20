import { Component, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ICertification } from '../../../../models/resume.model';
import { MatStepper } from '@angular/material/stepper';

@Component({
  selector: 'app-certification',
  templateUrl: './certification.component.html',
  styleUrls: ['./certification.component.scss']
})
export class CertificationComponent {
  @Input() heading: string = '';
  @Input() declare stepper: MatStepper;
  public dummyCertificationData: ICertification = {
    name: '',
    organization: '',
    end: ''
  };
  public certificationData: Array<ICertification> = [
    {
      name: '',
      organization: '',
      end: ''
    }
  ];

  constructor(private http: HttpClient) { }

  public addNewFields(): void {
    this.certificationData.push(JSON.parse(JSON.stringify(this.dummyCertificationData)));
  }

  public deleteCertificationItem(index: number): void {
    this.certificationData.splice(index, 1);
  }

  public saveAndNext(): void {
    for (const certificationItem of this.certificationData) {
      const certificationDetail = {
        profileId: localStorage.getItem('profileID'),
        name: certificationItem.name,
        organization: certificationItem.organization,
        end: certificationItem.end
      };

      const token = localStorage.getItem('access_token');

      this.http.post('https://sdcportalapijob23.azurewebsites.net/api/Profile/AddCertificationDetails', certificationDetail, {
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
