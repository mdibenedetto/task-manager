import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskEditInfoComponent } from './task-edit-info.component';

describe('TaskEditInfoComponent', () => {
  let component: TaskEditInfoComponent;
  let fixture: ComponentFixture<TaskEditInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaskEditInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskEditInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
