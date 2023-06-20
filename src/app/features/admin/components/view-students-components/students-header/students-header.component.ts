import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IDepartment } from 'src/app/features/models/api.model';

@Component({
  selector: 'app-students-header',
  templateUrl: './students-header.component.html',
  styleUrls: ['./students-header.component.scss']
})
export class StudentsHeaderComponent {
  @Input() declare departments: IDepartment[];
  @Output() departmentName = new EventEmitter<string>();


  public selectDepartment(department: string) {
    this.departmentName.emit(department);
  }
}
