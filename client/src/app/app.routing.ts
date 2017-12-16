import { Route,Router, RouterModule, PreloadAllModules } from '@angular/router';
import { NgModule } from '@angular/core';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { AuthGuardService } from './user/auth-guard/auth-guard.service';


export const RouteDefinitions: Route[] = [
   
  {
    path: 'welcome',
    component: WelcomeComponent,
    data: {
      role: 'everyone'
    }
  },
  {
    path: 'tasks',
    canActivate: [AuthGuardService],
    loadChildren: './tasks/tasks.module#TasksModule',
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
  imports: [RouterModule.forRoot(RouteDefinitions, {
    enableTracing: false,
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule {
    // constructor(private router:Router){
    //      router.config.filter(x=>(x.data || {}).role==='myRoute')
    // }
}
