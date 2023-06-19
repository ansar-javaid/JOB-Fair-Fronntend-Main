import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayDetailsComponent } from './display-details.component';

describe('DisplayDetailsComponent', () => {
  let component: DisplayDetailsComponent;
  let fixture: ComponentFixture<DisplayDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DisplayDetailsComponent]
    });
    fixture = TestBed.createComponent(DisplayDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
