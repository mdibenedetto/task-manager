import { Component, OnInit } from '@angular/core';
import { IUser } from '../../user';
import { AuthService } from '../../services/auth-service/auth.service';

@Component({
  selector: 'user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {
  user: IUser;
   

  constructor(private authService: AuthService) {


  }

  ngOnInit() {
    this.user = this.authService.currentUser || { } as IUser;
  }

}
