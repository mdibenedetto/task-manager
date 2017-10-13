import { Component, OnInit } from '@angular/core';
import { Router, Event, NavigationStart, NavigationEnd, NavigationError, NavigationCancel } from '@angular/router';
import { AuthService } from './user/auth-service/auth.service';
import { MessageService } from './messages/message-service/message.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  loading: boolean = true;
  constructor(private authService: AuthService, private router: Router, private messageService: MessageService) {
    router.events.subscribe((routerEvent: Event) => {
      this.checkRouterEvent(routerEvent);
    });
  }

  ngOnInit() {
    this.authService.checkLoggedInStatus().subscribe(user => {
      if (this.authService.redirectUrl) {
        this.router.navigateByUrl(this.authService.redirectUrl)
      } else {
        this.router.navigate(['/tasks']);
      }
    });
  }
  checkRouterEvent(routerEvent: Event): void {
    if (routerEvent instanceof NavigationStart) {
      this.loading = true;
    }

    if (routerEvent instanceof NavigationEnd ||
      routerEvent instanceof NavigationCancel ||
      routerEvent instanceof NavigationError) {
      this.loading = false;
    }
  }

  displayMessages(): void {
    this.router.navigate([{
      outlets: {
        popup: ['messages']
      }
    }]);
    this.messageService.isDisplayed = true;
  }

  hideMessages(): void {
    this.messageService.isDisplayed = false;
    this.router.navigate([{
      outlets: {
        popup: null
      }
    }]);
  }

  logIn() {
    this.router.navigate(['welcolme']);
  }

  logOut(): void {
    // this.authService.fakeLogout();
    //  this.router.navigateByUrl('/welcome');
    this.authService.logout().subscribe(
      () => this.router.navigateByUrl('/welcome'),
      (error) => alert(error));
  }

}
