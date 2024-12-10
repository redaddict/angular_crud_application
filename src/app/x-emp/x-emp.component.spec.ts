import { ComponentFixture, TestBed } from '@angular/core/testing';

import { XEmpComponent } from './x-emp.component';

describe('XEmpComponent', () => {
  let component: XEmpComponent;
  let fixture: ComponentFixture<XEmpComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [XEmpComponent]
    });
    fixture = TestBed.createComponent(XEmpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
