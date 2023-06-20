import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared/shared.module';
import { ViewStudentsComponent } from './components/view-students/view-students.component';
import { StudentsHeaderComponent } from './components/view-students-components/students-header/students-header.component';



@NgModule({
  declarations: [
    ViewStudentsComponent,
    StudentsHeaderComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class AdminModule { }
