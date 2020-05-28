import { Component, OnInit } from '@angular/core';
import { IUser } from '../../../../__shared__/model/user';
import { UserService } from '../../services/user-service/user-service';


@Component({
  selector: 'user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users: IUser[];

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.searchUsers();
  }

  searchUsers() {
    this.userService
      .findUsers()
      .subscribe((users: IUser[]) => this.users = users);
  }

  removeUser(id: string) {
    this.userService
      .removeUser(id)
      .subscribe(_ => this.searchUsers());
  }

}
