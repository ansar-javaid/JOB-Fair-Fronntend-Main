import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { baseUrl } from 'src/app/core/urls.const';
import { IDepartment } from 'src/app/features/models/api.model';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  constructor(private http: HttpClient) { }

  public getAllDepartments(): Observable<Array<IDepartment>> {
    const token = localStorage.getItem('access_token'); // Replace with your actual bearer token

    // Add the bearer token to the request headers
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
  
    // Send the HTTP GET request with the headers
    return this.http.get<Array<IDepartment>>(baseUrl + 'Department/GetAllDepartments', { headers });
  }
}
