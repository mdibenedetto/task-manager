import { registerLocaleData } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import lang from '@angular/common/locales/it';
import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { environment } from 'src/environments/environment';
import { AppRoutingModule } from './app-routing.module';
// components
import { AppComponent } from './app.component';
import { AccessModule } from './modules/access/access.module';
import { PageNotFoundComponent, WelcomeComponent } from './pages';
import { ErrorHandlerInterceptor, HeaderInterceptor, WebApiUrlInterceptor } from './__shared__/interceptors';
// modules
import { MessagesModule, MockDBModule, NGMaterialModule } from './__shared__/modules';
// import langExtra from '@angular/common/locales/extra/it';
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
  declarations: [AppComponent, WelcomeComponent, PageNotFoundComponent],
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
