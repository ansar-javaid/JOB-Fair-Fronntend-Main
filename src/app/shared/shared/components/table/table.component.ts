import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { IStudents } from 'src/app/features/models/students.model';
import { ResumeService } from 'src/app/features/view-resume/services/resume.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {
  @Input() declare tableHeadings: string[];
  @Input() declare students: IStudents[];
  @Input() currentDepartment: string = ''
  public searched: boolean = false;
  public searchQuery: string = '';

  get searchStudents() {
    if (!this.searchQuery.trim()) {
      return this.students;
    }
    
    const searchQuery = this.searchQuery.toLowerCase().trim();
    return this.students.filter(item =>
      (item.email.toLowerCase().includes(searchQuery) && item.department.includes(this.currentDepartment))
    )}

    constructor(
      private router: Router,
      private resumeService: ResumeService
    ){}

    public viewResume(id: Number, email: string): void {
      console.log(id)
      this.resumeService.setStudentEmail(email);
      this.router.navigate(['view-resume', id.toString()]);
      
    }
}
