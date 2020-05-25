import { BrowserModule } from "@angular/platform-browser";
import { NgModule, LOCALE_ID } from "@angular/core";
import { registerLocaleData } from "@angular/common";
//import lang
import lang from "@angular/common/locales/it";
// import langExtra from '@angular/common/locales/extra/it';
registerLocaleData(lang);
// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from "angular-in-memory-web-api";
import { MockData } from "./__shared__/mock-data";
import { NGMaterialModule } from './__shared__/ng-material.module';

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { WelcomeComponent } from "./pages/welcome/welcome.component";
import { PageNotFoundComponent } from "./pages/page-not-found/page-not-found.component";

/* Feature Modules */
// import { TasksModule } from './tasks/tasks.module';
import { UserModule } from "./modules/user/user.module";
import { MessagesModule } from "./__shared__/modules/messages/messages.module";

import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    HttpClientModule,
    InMemoryWebApiModule.forRoot(MockData, { delay: 0 }), 
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
