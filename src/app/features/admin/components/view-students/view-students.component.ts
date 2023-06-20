import { Component } from '@angular/core';
import { IDepartment } from 'src/app/features/models/api.model';
import { IStudents } from 'src/app/features/models/students.model';
import { DepartmentService } from 'src/app/shared/shared/services/department.service';

@Component({
  selector: 'app-view-students',
  templateUrl: './view-students.component.html',
  styleUrls: ['./view-students.component.scss']
})
export class ViewStudentsComponent {

  public declare departments: IDepartment[];
  public students: IStudents[] = [];
  public tableHeading: string[] = []
  public currentDepartment: string = 'All Departments';

  constructor(
    private departmentService: DepartmentService
  ){}


  ngOnInit() {
    this.departmentService.getAllDepartments().subscribe((departments: IDepartment[]) => {
      this.departments = departments;
    });

    //Generating dummy students
    for (let i = 0; i < 20; i++) {
      this.students.push({
        name: 'Rabbaniyeh',
        department: 'CS',
        registration: 'FA19-BCS-013',
        gender: 'Female',
        email: 'rabbaniyeh@gmail.com'
      })
      
    }

    //Table heading
    this.tableHeading = ['ID', 'Name', 'Department', 'Registration', 'Gender', 'Email']
  }

  public selectDepartment(e: string) {
    this.currentDepartment = e;
  }

}
