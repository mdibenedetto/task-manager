import { NgModule } from '@angular/core';
import { Routes, Route, Router, RouterModule, NoPreloading, PreloadAllModules } from '@angular/router';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { AuthGuardService } from './modules/user/guards/auth-guard/auth-guard.service';

const routes: Routes = [

  {
    path: 'welcome',
    component: WelcomeComponent,
    data: {
      role: 'everyone'
    }
  },
  {
    path: 'tasks',
    // canActivate: [AuthGuardService],
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

  // { path: 'access', loadChildren: () => import('./modules/access/access.module').then(m => m.AccessModule) }, 
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
    preloadingStrategy: NoPreloading // PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { 
}
