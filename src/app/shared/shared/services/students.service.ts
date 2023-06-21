import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { baseUrl } from 'src/app/core/urls.const';
import { IStudents } from 'src/app/features/models/students.model';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  constructor(private http: HttpClient) { }

  public getAllStudents(): Observable<IStudents[]> {
    return this.http.get<IStudents[]>(baseUrl + 'Manager/GetAllCandidates');
  }
}
