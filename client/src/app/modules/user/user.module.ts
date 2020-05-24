import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AuthService } from './services/auth-service/auth.service';
import { AuthGuardService } from './guards/auth-guard/auth-guard.service';

import { UserListComponent } from './pages/user-list/user-list.component';
import { LoginComponent } from './pages/login/login.component';
import { UserDetailComponent } from './pages/user-detail/user-detail.component';
import { UserEditComponent } from './pages/user-edit/user-edit.component';

const RouteDefinitions = [
  {
    path: 'users',
    component: UserListComponent
  },
  {
    path: 'users/new',
    component: UserEditComponent
  },
  {
    path: 'users/:id/edit',
    component: UserEditComponent
  }, {
    path: 'login',
    component: LoginComponent
  }];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(RouteDefinitions)
  ],
  declarations: [
    UserEditComponent,
    UserListComponent,
    LoginComponent,
    UserDetailComponent],
  providers: [AuthService, AuthGuardService]
})
export class UserModule { }
