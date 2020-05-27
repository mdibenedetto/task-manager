import { Component, OnInit } from '@angular/core';
import { Router, Event, NavigationStart, NavigationEnd, NavigationError, NavigationCancel } from '@angular/router';
import { MessageService } from './__shared__/modules/messages/message-service/message.service';
import { AuthService } from './modules/access/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  loading: boolean = true;

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
    this.authService.logout().subscribe(
      () => this.router.navigateByUrl('/welcome'),
      (error) => alert(error));
  }

}
