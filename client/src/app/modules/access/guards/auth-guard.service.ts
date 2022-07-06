import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanLoad,
  Route,
  Router,
  RouterStateSnapshot
} from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate, CanLoad {

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  canLoad(route: Route): boolean {
    return this.checkLoggedIn(route.path);
  }

  canActivate(_route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.checkLoggedIn(state.url);
  }

  checkLoggedIn(url: string = ''): boolean {
    if (this.authService.isLoggedIn()) {
      return true;
    }

    this.authService.redirectUrl = url;
    this.router.navigate(['/login']);

    return false;
  }
}

