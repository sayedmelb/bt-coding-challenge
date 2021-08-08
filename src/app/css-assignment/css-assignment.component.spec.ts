import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CssAssignmentComponent } from './css-assignment.component';

describe('CssAssignmentComponent', () => {
  let component: CssAssignmentComponent;
  let fixture: ComponentFixture<CssAssignmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CssAssignmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CssAssignmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
