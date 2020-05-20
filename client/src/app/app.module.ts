// import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { RouterModule, Routes } from "@angular/router";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule, LOCALE_ID } from "@angular/core";
import { registerLocaleData } from "@angular/common";
//import lang
import lang from "@angular/common/locales/it";
// import langExtra from '@angular/common/locales/extra/it';
registerLocaleData(lang);
// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from "angular-in-memory-web-api";
import { MockData } from "./common/mock-data";
import { NGMaterialModule } from './common/ng-material.module';

import { RouteDefinitions, AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { WelcomeComponent } from "./welcome/welcome.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";

/* Feature Modules */
// import { TasksModule } from './tasks/tasks.module';
import { UserModule } from "./user/user.module";
import { MessagesModule } from "./messages/messages.module";

import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  imports: [ 
    BrowserAnimationsModule,
    BrowserModule,
    HttpClientModule,
    InMemoryWebApiModule.forRoot(MockData, { delay: 0 }),
    // TasksModule,
    UserModule,
    MessagesModule,
    NGMaterialModule,
    AppRoutingModule
  ], 
  declarations: [AppComponent, WelcomeComponent, PageNotFoundComponent],
  providers: [{ provide: LOCALE_ID, useValue: "it-IT" }],
  bootstrap: [AppComponent]
})
export class AppModule { }
