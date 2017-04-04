
import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let app, compiled: any;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ], 
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    });
    TestBed.compileComponents();

    fixture = TestBed.createComponent(AppComponent);

    app = fixture.debugElement.componentInstance;
    compiled = fixture.debugElement.nativeElement;

  });

  it('should create the app', async(() => {
    expect(app).toBeTruthy();
  }));

  it(`should have as title 'Task Manager!'`, async(() => {
    expect(app.title).toEqual('Task Manager!');
  }));

  it('should render title in a h1 tag', async(() => {
    fixture.detectChanges();
    expect(compiled.querySelector('h1').textContent).toContain('Task Manager!');
  }));

  it('should render and navigation-bar tag', async(() => {
    fixture.detectChanges(); 
    expect(compiled.querySelector('navigation-bar') === null).toBeFalsy();
  }))
});
