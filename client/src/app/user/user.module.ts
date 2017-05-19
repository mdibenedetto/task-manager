import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Route, RouterModule } from '@angular/router';
import { UserComponent } from './user/user.component';
import { UserListComponent } from './user-list/user-list.component';
import { LoginComponent } from './login/login.component';
import { AuthService } from './auth-service/auth.service';

@NgModule({
  imports: [
    CommonModule, FormsModule,
    RouterModule.forChild([{
      path: 'users',
      component: UserListComponent
    }, {
      path: 'login',
      component: LoginComponent
    }])
  ],
  declarations: [UserComponent, UserListComponent, LoginComponent],
  providers:[AuthService]
})
export class UserModule {}
