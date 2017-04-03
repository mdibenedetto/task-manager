/* tslint:disable:no-unused-variable */
 

// import { RouterModule, RouterLink,RouterLinkActive ,RouterOutlet } from '@angular/router';
import { async, ComponentFixture, TestBed ,} from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement, NO_ERRORS_SCHEMA } from '@angular/core';
import { NavigationBarComponent } from './navigation-bar.component';

describe('NavigationBarComponent', () => {
  let component: NavigationBarComponent;
  let fixture: ComponentFixture < NavigationBarComponent > ;

  beforeEach(async(() => {
    TestBed.configureTestingModule({ 
      // imports:[RouterModule],
        declarations: [NavigationBarComponent],
        schemas: [NO_ERRORS_SCHEMA]
      })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavigationBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
