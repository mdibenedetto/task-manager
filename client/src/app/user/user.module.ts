import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import { UserComponent } from '../user/user/user.component';
import { UserListComponent } from '../user/user-list/user-list.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: 'users',
        component: UserListComponent
      }
    ])
  ],
  declarations: [UserComponent, UserListComponent]
})
export class UserModule { }
