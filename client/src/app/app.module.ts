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
import { MessagesModule } from "./__shared__/modules/messages/messages.module";

import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { AccessModule } from './modules/access/access.module';
import { ErrorHandlerInterceptor } from './__shared__/interceptors/error-handler.interceptor';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    HttpClientModule,
    InMemoryWebApiModule.forRoot(MockData, { delay: 0 }), 
    NGMaterialModule,
    AccessModule,
    MessagesModule,
    AppRoutingModule
  ],
  declarations: [AppComponent, WelcomeComponent, PageNotFoundComponent],
  providers: [
    { provide: LOCALE_ID, useValue: "it-IT" },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorHandlerInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
