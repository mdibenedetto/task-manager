
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OpenMode } from 'src/app/__shared__/model/enums';
import { IUser } from 'src/app/__shared__/model/user';
import { MessageService } from 'src/app/__shared__/modules/messages/message-service/message.service';
import { AuthService } from '../../../access/services/auth.service';
import { UserService } from '../../services/user-service/user-service';



@Component({
  selector: 'user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {
  mode: OpenMode = OpenMode.ADD;
  user: IUser = {} as IUser;

  constructor(
    private authService: AuthService,
    private userService: UserService,
    private router: Router,
    private route: ActivatedRoute,
    private messageService: MessageService

  ) { }

  ngOnInit() {
    const id: string = this.route.snapshot.params['id'];

    if (id) {
      this.mode = OpenMode.UPDATE;
      this.loadUser(id);
    }
    else {
      this.mode = OpenMode.ADD;
    }
  }

  loadUser(id: string) {
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

  isValid(): boolean {
    return true;
  }

  save() {
    this.userService
      .saveUser(this.user)
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
    // TODO = REFACTORING
    // console.warn("reset()  - Method not implemented.");
  }

  delete() {
    this.userService.removeUser(this.user.id)
      .subscribe(_ =>
        this.router.navigate(['/users'])
      );
  }

}
