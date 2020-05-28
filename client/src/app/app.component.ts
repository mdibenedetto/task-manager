import { Component } from '@angular/core';
import { Event, NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router } from '@angular/router';
import { AuthService } from './modules/access/services/auth.service';
import { MessageService } from './__shared__/modules/messages/message-service/message.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  loading = true;

  constructor(
    public authService: AuthService,
    private router: Router,
    public messageService: MessageService) {

    router.events.subscribe((routerEvent: Event) => {
      this.checkRouterEvent(routerEvent);
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
    this.authService.logout()
      .subscribe(
        () => this.router.navigateByUrl('/welcome'));
  }

}
