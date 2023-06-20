import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { BuildResumeService } from '../../../services/build-resume.service';
import { IDepartment } from 'src/app/features/models/api.model';
import { AuthService } from 'src/app/auth/auth.service';
import { DialogComponent } from 'src/app/shared/shared/components/dialog/dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { MatStepper } from '@angular/material/stepper';

@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.scss']
})
export class PersonalComponent {
  @Input() heading: string = '';
  @Input() declare stepper: MatStepper;
  public imageUrl: string = '';
  public isFormLoaded: boolean = false;
  public allDepartments: IDepartment[] = [];
  public isLoading: boolean = false;
  public form!: FormGroup;
  public image!: File;

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private buildResume: BuildResumeService,
    private authService: AuthService,
    
  ) { 
   
    console.log("Here"+ localStorage.getItem('email'));
  }

  ngOnInit(): void {
   
    this.form = this.formBuilder.group({
      Email:   localStorage.getItem('email'),
      Registration: '',
      Address: '',
      DepartmentId: 1,
      Phone: '',
      LinkedIn: '',
      Website: '',
      Summary: ''
    });

    this.getAllDepartments();
  }

  public onImageUpload(event: any): void {
    this.image = event.target.files[0];
    this.imageUrl = URL.createObjectURL(this.image);
  }

  public savePersonalData(): void {
    if (this.form.invalid) {
      // Handle form validation errors
      return;
    }

    this.isLoading = true;

    const formData: FormData = new FormData();
    formData.append('Email', this.form.get('Email')?.value);
    formData.append('Registration', this.form.get('Registration')?.value);
    formData.append('Address', this.form.get('Address')?.value);
    formData.append('DepartmentId', this.form.get('DepartmentId')?.value.toString());
    formData.append('Phone', this.form.get('Phone')?.value);
    formData.append('LinkedIn', this.form.get('LinkedIn')?.value);
    formData.append('Website', this.form.get('Website')?.value);
    formData.append('Summary', this.form.get('Summary')?.value);
    formData.append('File', this.image);

    const token = localStorage.getItem('access_token');

    this.http.post('https://sdcportalapijob23.azurewebsites.net/api/Profile/AddPersonalInfo', formData, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    }).subscribe(
      (res: any) => {
        this.isLoading = false;
        // Handle success response
        this.stepper.next();
        console.log(res);
    
        if (res && res.hasOwnProperty('statusCode') && res.statusCode === 201) {
          const profileID = res.value.profileID;
          localStorage.setItem('profileID', profileID.toString());
        }
      },
      (err) => {
        this.isLoading = false;
        // Handle error response
        console.error(err);
      }
    );
  }

  private getAllDepartments(): void {
    this.buildResume.getAllDepartments().subscribe(
      (departments: IDepartment[]) => {
        this.allDepartments = departments;
        this.isFormLoaded = true;
      },
      (error) => {
        console.error(error);
      }
    );
  }

}