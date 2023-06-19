import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayPersonalComponent } from './display-personal.component';

describe('DisplayPersonalComponent', () => {
  let component: DisplayPersonalComponent;
  let fixture: ComponentFixture<DisplayPersonalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DisplayPersonalComponent]
    });
    fixture = TestBed.createComponent(DisplayPersonalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
