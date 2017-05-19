import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from '../auth-service/auth.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
})
export class LoginComponent {
  errorMessage: string;
  pageTitle = 'Log In';

  constructor(private authService: AuthService,
    private router: Router) { }

  login(loginForm: NgForm) {
    if (loginForm && loginForm.valid) {
      let userName = loginForm.form.value.userName;
      let password = loginForm.form.value.password;
      this.authService.login(userName, password);

      // Navigate to the Product List page after log in.
      this.router.navigate(['/tasks']);
    } else {
      this.errorMessage = 'Please enter a user name and password.';
    };
  }
}



// import { Component, OnInit } from '@angular/core';
// import { Router } from '@angular/router';
// import { AuthService } from '../auth-service/auth.service';

// @Component({
//   selector: 'login',
//   templateUrl: './login.component.html',
//   styleUrls: ['./login.component.css']
// })
// export class LoginComponent implements OnInit {
//   pageTitle: string = '';
//   constructor(private router: Router, private authService: AuthService) {}

//   ngOnInit() {
//     this.authService.login('Michele', 'password');

//     setTimeout(() => this.router.navigate(['/tasks']), 1000);
//     // this.authService.httpLogin('Michele', 'password')
//     //   .subscribe(res => 
//     //   {
//     //     this.authService.currentUser. 
//     //       this.router.navigate(['/tasks']);
//     //   }

//     // );
//   }
// }
