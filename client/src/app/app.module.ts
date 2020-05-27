import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule, LOCALE_ID } from "@angular/core";
import { registerLocaleData } from "@angular/common";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import lang from "@angular/common/locales/it";
import { InMemoryWebApiModule } from "angular-in-memory-web-api";
// import langExtra from '@angular/common/locales/extra/it';
registerLocaleData(lang);
// modules
import { MockData } from "./__shared__/mock-data";
import { NGMaterialModule, MessagesModule } from './__shared__/modules';
import { ErrorHandlerInterceptor, WebApiUrlInterceptor, HeaderInterceptor } from './__shared__/interceptors';
import { AccessModule } from './modules/access/access.module';
import { AppRoutingModule } from "./app-routing.module";
// components
import { AppComponent } from "./app.component";
import { WelcomeComponent, PageNotFoundComponent } from "./pages";


@NgModule({
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    HttpClientModule,
    InMemoryWebApiModule.forRoot(MockData, {
      apiBase: 'api/',
      delay: 0
    }),
    NGMaterialModule,
    AccessModule,
    MessagesModule,
    AppRoutingModule
  ],
  declarations: [AppComponent, WelcomeComponent, PageNotFoundComponent],
  providers: [
    { provide: LOCALE_ID, useValue: "it-IT" },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorHandlerInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: WebApiUrlInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: HeaderInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
