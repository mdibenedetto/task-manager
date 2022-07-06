import { Component, OnInit } from '@angular/core';
import { IUser } from 'src/app/__shared__/model';
import { UserService } from '../../services/user-service/user-service';

@Component({
  selector: 'user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users = [] as IUser[];

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.searchUsers();
  }

  searchUsers(): void {
    this.userService
      .findUsers()
      .subscribe((users: IUser[]) => this.users = users);
  }

  removeUser(id: string | number): void {
    this.userService
      .removeUser(id)
      .subscribe(_ => this.searchUsers());
  }

}
