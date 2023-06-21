import { Component } from '@angular/core';
import { IDepartment } from 'src/app/features/models/api.model';
import { IStudents } from 'src/app/features/models/students.model';
import { DepartmentService } from 'src/app/shared/shared/services/department.service';
import { StudentsService } from 'src/app/shared/shared/services/students.service';

@Component({
  selector: 'app-view-students',
  templateUrl: './view-students.component.html',
  styleUrls: ['./view-students.component.scss']
})
export class ViewStudentsComponent {

  public declare departments: IDepartment[];
  public students: IStudents[] = [];
  public filteredStudents: IStudents[] = [];
  public tableHeading: string[] = []
  public currentDepartment: string = 'All Departments';

  constructor(
    private departmentService: DepartmentService,
    private studentsService: StudentsService
  ){}


  ngOnInit() {
    this.getAllDepartments();
    this.getAllStudents();
    //Table heading
    this.tableHeading = ['ID', 'Name', 'Department', 'Registration', 'Gender', 'Email']
  }

  public selectDepartment(e: string) {
    this.currentDepartment = e;
    this.filteredStudents = this.students.filter(student => {
      return student.department.includes(this.currentDepartment)
    })
  }

  public getAllDepartments(): void {
    this.departmentService.getAllDepartments().subscribe((departments: IDepartment[]) => {
      this.departments = departments;
    });
  }

  public getAllStudents(): void {
    this.studentsService.getAllStudents().subscribe((students:IStudents[]) => {
      this.students = students;
      this.filteredStudents = students;
      console.log(this.students)
    })
  }

}
