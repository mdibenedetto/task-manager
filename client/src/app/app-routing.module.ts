import { NgModule } from '@angular/core';
import { Routes, RouterModule, NoPreloading, PreloadAllModules, Route, PreloadingStrategy } from '@angular/router';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { AuthGuardService } from './modules/access/guards/auth-guard.service';
import { Observable, of } from 'rxjs';


export class CustomPreloadingService implements PreloadingStrategy {
  preload(route: Route, load: Function): Observable<any> {
    return route.data && route.data.preload ? load() : of(null);
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
    preloadingStrategy: NoPreloading //CustomPreloadingService//NoPreloading // PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
