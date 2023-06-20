import { Component, Input } from '@angular/core';
import { IStudents } from 'src/app/features/models/students.model';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {
  @Input() declare tableHeadings: string[];
  @Input() declare students: IStudents[];
  public searched: boolean = false;
  public searchQuery: string = '';

  get searchStudents() {
    if (!this.searchQuery.trim()) {
      return this.students;
    }
    
    const searchQuery = this.searchQuery.toLowerCase().trim();
    
    return this.students.filter(item =>
      item.email.toLowerCase().includes(searchQuery)
    )}
}
