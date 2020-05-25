import { Component, ViewChild, ElementRef, AfterViewInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";
import { AuthService } from "../../guards/auth.service";

@Component({
  selector: "login",
  styleUrls: ['./login.component.css'],
  templateUrl: "./login.component.html"
})
export class LoginComponent implements AfterViewInit {

  @ViewChild("refUserNameElement")
  txtUserName: ElementRef<HTMLInputElement>;

  errorMessage: string;

  pageTitle = "Log In";
  
  userName = "admin";
  password = "admin";

  constructor(
    private authService: AuthService,
    private router: Router) {
  }

  ngAfterViewInit(): void {
    this.txtUserName.nativeElement.focus();
  }

  login(loginForm: NgForm) {

    if (loginForm && loginForm.valid) {

      let { userName, password } = loginForm.form.value;

      this.authService.login(userName, password)
        .subscribe(_ => {
          if (this.authService.redirectUrl) {
            this.router.navigateByUrl(this.authService.redirectUrl);
          } else {
            this.router.navigate(["/tasks"]);
          }
        },
          alert
        );
    } else {
      this.errorMessage = "Please enter a user name and password.";
    }
  }
}
