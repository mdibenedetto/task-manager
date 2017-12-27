import { Component, OnInit } from '@angular/core';
import { IUser } from 'app/user/user';
import { AuthService } from 'app/user/auth-service/auth.service';

@Component({
  selector: 'user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {
  user: IUser = {} as any;

  constructor(authService: AuthService) {  
    this.user = authService.currentUser || { }as any;
  }

  ngOnInit() {
  }

}
