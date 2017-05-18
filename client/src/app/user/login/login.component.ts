import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth-service/auth.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  pageTitle: string = '';
  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit() {
    this.authService.login('Michele', 'password');

    setTimeout(() => this.router.navigate(['/tasks']), 1000);
    // this.authService.httpLogin('Michele', 'password')
    //   .subscribe(res => 
    //   {
    //     this.authService.currentUser. 
    //       this.router.navigate(['/tasks']);
    //   }

    // );
  }
}
