import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AuthService } from '../access/services/auth.service';
import { AuthGuardService } from '../access/guards/auth-guard.service';

import { UserListComponent } from './pages/user-list/user-list.component';
import { UserDetailComponent } from './pages/user-detail/user-detail.component';
import { UserEditComponent } from './pages/user-edit/user-edit.component';

const RouteDefinitions = [
  {
    path: '',
    component: UserListComponent
  },
  {
    path: 'new',
    component: UserEditComponent
  },
  {
    path: ':id/edit',
    component: UserEditComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(RouteDefinitions)
  ],
  declarations: [
    UserEditComponent,
    UserListComponent, 
    UserDetailComponent],
  providers: [AuthService, AuthGuardService]
})
export class UsersModule { }
