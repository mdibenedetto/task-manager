import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './user/auth-service/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private authService: AuthService, private router: Router) {}

  logIn() {
    this.router.navigate(['welcolme']);
  }

  logOut(): void {
    this.authService.logout();
    this.router.navigateByUrl('/welcome');
  }

}
