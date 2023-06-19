import { Injectable } from '@angular/core';
import { IDepartment } from '../../models/api.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { baseUrl } from 'src/app/core/urls.const';
import { Observable } from 'rxjs';
import { IPersonal } from '../../models/resume.model';

@Injectable({
  providedIn: 'root'
})
export class BuildResumeService {

  constructor(private http: HttpClient) { }

  public getAllDepartments(): Observable<Array<IDepartment>> {
    const token = localStorage.getItem('access_token'); // Replace with your actual bearer token

    // Add the bearer token to the request headers
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
  
    // Send the HTTP GET request with the headers
    return this.http.get<Array<IDepartment>>(baseUrl + 'Department/GetAllDepartments', { headers });
  }

  public postPersonalData(personalData: IPersonal) {
    return this.http.post<Array<IPersonal>>(baseUrl + 'Profile/AddPersonalInfo', personalData)
  }
}
