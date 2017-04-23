import {
  Injectable
} from '@angular/core';

@Injectable()
export class AuthService {
  currentUser;

  isLoggedIn() {
    return !!this.currentUser;
  }

  login(userName: string, password: string) {
    if (!userName || !password) {
      return alert('Please enter your userName and password')
    }
    if (userName === 'admin') {
      this.currentUser = {
        id: 1,
        userName: userName,
        isAdmin: true
      };
    }
    this.currentUser = {
      id: 2,
      userName: userName,
      isAdmin: false
    };
  }
  logout() {
    this.currentUser = null;
  }
}
