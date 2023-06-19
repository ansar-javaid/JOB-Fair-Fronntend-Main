import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumeStepperComponent } from './resume-stepper.component';

describe('ResumeStepperComponent', () => {
  let component: ResumeStepperComponent;
  let fixture: ComponentFixture<ResumeStepperComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ResumeStepperComponent]
    });
    fixture = TestBed.createComponent(ResumeStepperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
