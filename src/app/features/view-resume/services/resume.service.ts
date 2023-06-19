import { Injectable } from '@angular/core';
import { IResume } from '../../models/resume.model';
import { Observable, of } from 'rxjs';
import { dummyResumeData } from '../constants/dummy-resume-data.const';
import { HttpClient } from '@angular/common/http';
import { baseUrl } from 'src/app/core/urls.const';

@Injectable({
  providedIn: 'root'
})
export class ResumeService {

  constructor(private http: HttpClient) { }

  public getProfileId(): string | null {
    return localStorage.getItem('profileID');
  }


  public getResumeData(profileId: string | null): Observable<IResume> {
    const token = localStorage.getItem('access_token');
  
    return this.http.get<IResume>(baseUrl + `Profile/GetProfile/?profileID=${profileId}`, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });
  }
  
}
