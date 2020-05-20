import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskEditTagsComponent } from './task-edit-tags.component';

describe('TaskEditTagsComponent', () => {
  let component: TaskEditTagsComponent;
  let fixture: ComponentFixture<TaskEditTagsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaskEditTagsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskEditTagsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
