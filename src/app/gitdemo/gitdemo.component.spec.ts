import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GitdemoComponent } from './gitdemo.component';

describe('GitdemoComponent', () => {
  let component: GitdemoComponent;
  let fixture: ComponentFixture<GitdemoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GitdemoComponent]
    });
    fixture = TestBed.createComponent(GitdemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
