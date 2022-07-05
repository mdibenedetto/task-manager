import { Injectable, NgModule } from '@angular/core';
import { PreloadingStrategy, Route, RouterModule, Routes } from '@angular/router';
import { Observable, of } from 'rxjs';
import { AuthGuardService } from './modules/access/guards/auth-guard.service';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { WelcomeComponent } from './pages/welcome/welcome.component';
@Injectable({
  providedIn: 'root'
})
class CustomPreloadingService implements PreloadingStrategy {
  preload(route: Route, load: () => Observable<any>): Observable<any> {
    return route.data && route.data['preload'] ? load() : of(null);
  }
}

const routes: Routes = [
  {
    path: 'welcome',
    component: WelcomeComponent,
    data: {
      role: 'everyone'
    }
  },
  {
    path: 'users',
    canActivate: [AuthGuardService],
    loadChildren: () => import('./modules/users/users.module')
      .then(m => m.UsersModule),
    data: { preload: true }
  },
  {
    path: 'tasks',
    canActivate: [AuthGuardService],
    loadChildren: () => import('./modules/tasks/tasks.module')
      .then(m => m.TasksModule),
    data: {
      role: 'login-user'
    }
  },
  {
    path: '',
    redirectTo: 'welcome',
    pathMatch: 'full'
  },
  {
    path: 'home',
    redirectTo: 'welcome',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: PageNotFoundComponent,
    data: {
      role: 'everyone'
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    enableTracing: false,
    preloadingStrategy: CustomPreloadingService// NoPreloading // PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
