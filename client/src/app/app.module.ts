// import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule,LOCALE_ID } from '@angular/core';
import { HttpModule } from '@angular/http';
// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { TaskData } from './tasks/task-data';

import { RouteDefinitions, AppRoutingModule } from './app.routing';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

/* Feature Modules */
// import { TasksModule } from './tasks/tasks.module';
import { UserModule } from './user/user.module';
import { MessagesModule  } from './messages/messages.module'; 

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(TaskData, { delay: 1000 }),    
    // TasksModule,
    UserModule,
    MessagesModule,
    AppRoutingModule,
  ],
  declarations: [
    AppComponent,
    WelcomeComponent,
    PageNotFoundComponent 
  ],
  providers: [ {provide: LOCALE_ID, useValue: 'it-IT'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
