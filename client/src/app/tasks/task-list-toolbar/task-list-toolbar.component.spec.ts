import { CUSTOM_ELEMENTS_SCHEMA,NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { TaskListToolbarComponent } from './task-list-toolbar.component';
import { Component, Output, Input, EventEmitter } from '@angular/core';

describe('TaskListToolbarComponent', () => {
  let component: TaskListToolbarComponent;
  let fixture: ComponentFixture < TaskListToolbarComponent > ;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
        declarations: [TaskListToolbarComponent],
        schemas: [CUSTOM_ELEMENTS_SCHEMA,NO_ERRORS_SCHEMA]
      })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskListToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
