import { registerLocaleData } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import lang from '@angular/common/locales/it';
// import langExtra from '@angular/common/locales/extra/it';
import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// components and mosule
import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './core/components/navbar/navbar.component';
import { AccessModule } from './modules/access/access.module';
import { PageNotFoundComponent, WelcomeComponent } from './pages';
import { ErrorHandlerInterceptor, HeaderInterceptor, WebApiUrlInterceptor } from './__shared__/interceptors';
import { MessagesModule, MockDBModule, NGMaterialModule } from './__shared__/modules';

registerLocaleData(lang);

@NgModule({
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    HttpClientModule,
    environment.production ? [] : MockDBModule,
    NGMaterialModule,
    AccessModule,
    MessagesModule,
    AppRoutingModule
  ],
  declarations: [AppComponent, WelcomeComponent, PageNotFoundComponent, NavbarComponent],
  providers: [
    { provide: LOCALE_ID, useValue: 'it-IT' },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorHandlerInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: WebApiUrlInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: HeaderInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

}
