import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeaffichageComponent } from './employeaffichage.component';

describe('EmployeaffichageComponent', () => {
  let component: EmployeaffichageComponent;
  let fixture: ComponentFixture<EmployeaffichageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeaffichageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeaffichageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
