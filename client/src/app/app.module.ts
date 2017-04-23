// import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component'; 
import { TasksModule } from './tasks/tasks.module';
import { UserModule } from './user/user.module';
import { RouteDefinitions, AppRoutingModule } from './app.routing';
import { WelcomeComponent } from './welcome/welcome.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({

  imports: [
    BrowserModule,
    HttpModule,
    TasksModule,
    UserModule,
    AppRoutingModule,
  ],
  declarations: [
    AppComponent, 
    WelcomeComponent,
    PageNotFoundComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
