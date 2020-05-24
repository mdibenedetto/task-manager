
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { OpenMode } from 'src/app/__shared__/model/enums';
import { IUser } from '../../user';
import { AuthService } from '../../services/auth-service/auth.service';
import { UserService } from '../../services/user-service/user-service';

import { MessageService } from 'src/app/modules/messages/message-service/message.service';

@Component({
  selector: 'user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {
  mode: OpenMode;
  user: IUser = {} as IUser;

  constructor(
    private authService: AuthService,
    private userService: UserService,
    private router: Router,
    private route: ActivatedRoute,
    private messageService: MessageService

  ) { }

  ngOnInit() {
    const id: String = this.route.snapshot.params["id"];
    if (id) {
      this.mode = OpenMode.UPDATE;
      this.loadUser(id);
    }
    else {
      this.mode = OpenMode.ADD;
    }
  }

  loadUser(id: String) {
    if (this.authService.currentUser) {
      this.user = this.authService.currentUser;
    }
    else {
      this.userService
        .findUser(id)
        .subscribe((user: IUser) =>
          this.user = user
        );
    }
  }

  isValid(path: string): boolean {
    return true;
  }

  save() {
    this.userService.saveUser(this.user)
      .subscribe(
        () => this.onSaveCompleted(`${this.user.fullName} was saved`)
      );
  }

  onSaveCompleted(message: string): void {
    if (message) {
      this.messageService.addMessage(message);
    }
    this.reset();
    this.router.navigate(['/users']);
  }

  reset() {
    console.warn("reset()  - Method not implemented.");
  }

  delete() {
    this.userService.removeUser(this.user.id);
  }

}
