import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentsHeaderComponent } from './students-header.component';

describe('StudentsHeaderComponent', () => {
  let component: StudentsHeaderComponent;
  let fixture: ComponentFixture<StudentsHeaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StudentsHeaderComponent]
    });
    fixture = TestBed.createComponent(StudentsHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
