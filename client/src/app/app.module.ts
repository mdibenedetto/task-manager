// import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
// import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { AppComponent } from './app.component';
import { TasksModule } from './tasks/tasks.module';
import { UserModule } from './user/user.module';
import { MessagesModule  } from './messages/messages.module'; 
import { RouteDefinitions, AppRoutingModule } from './app.routing';
import { WelcomeComponent } from './welcome/welcome.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  imports: [
    BrowserModule,
    // InMemoryWebApiModule.forRoot(dbcreator, { delay: 1000 }),
    HttpModule,
    TasksModule,
    UserModule,
    MessagesModule,
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
export class AppModule { }
