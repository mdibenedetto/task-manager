import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";
import { AuthService } from "../auth-service/auth.service";

@Component({
  selector: "login",
  templateUrl: "./login.component.html" 
})
export class LoginComponent {
  errorMessage: string;
  pageTitle = "Log In";
  userName = "admin";
  password = "admin";
  
  constructor(private authService: AuthService, private router: Router) {}

  login(loginForm: NgForm) {
    if (loginForm && loginForm.valid) {
      let userName = loginForm.form.value.userName;
      let password = loginForm.form.value.password;

      this.authService.login(userName, password).subscribe(
        user => {
          if (this.authService.redirectUrl) {
            this.router.navigateByUrl(this.authService.redirectUrl);
          } else {
            this.router.navigate(["/tasks"]);
          }
        },
        error => alert(error)
      ); 
    } else {
      this.errorMessage = "Please enter a user name and password.";
    }
  }
}
