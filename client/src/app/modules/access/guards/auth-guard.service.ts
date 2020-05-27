import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate, CanLoad, Router,Route } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: "root"
})
export class AuthGuardService implements CanActivate, CanLoad {
  constructor(private authService: AuthService,
    private router: Router) { }

  canLoad(route: Route): boolean {
    return this.checkLoggedIn(route.path);
  }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.checkLoggedIn(state.url);
  }

  checkLoggedIn(url): boolean {
    if (this.authService.isLoggedIn()) {
      console.log('this.authService.isLoggedIn()')
      return true;
    }
    this.authService.redirectUrl = url;
    this.router.navigate(['/login']);
    return false;
  }
}

