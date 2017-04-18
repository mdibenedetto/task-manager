// import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {  RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { TasksModule } from './tasks/tasks.module' 
import { RouteDefinitions, AppRoutingModule, routingComponents } from './app.routing';
import { WelcomeComponent } from './welcome/welcome.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  imports: [
    BrowserModule, 
    HttpModule,
    TasksModule,
    AppRoutingModule,
  ],
  declarations: [
    AppComponent,
    NavigationBarComponent,
    routingComponents,
    WelcomeComponent,
    PageNotFoundComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
