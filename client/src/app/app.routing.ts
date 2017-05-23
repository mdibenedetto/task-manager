import { Route, RouterModule, PreloadAllModules } from '@angular/router';
import { NgModule } from '@angular/core';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { AuthGuardService } from './user/auth-guard/auth-guard.service';


export const RouteDefinitions: Route[] = [
    { path: 'welcome', component: WelcomeComponent },
    {
        path: 'tasks',
        canLoad: [AuthGuardService],
        loadChildren: './tasks/tasks.module#TasksModule'
    },
    { path: '', redirectTo: 'welcome', pathMatch: 'full' },
    { path: 'home', redirectTo: 'welcome', pathMatch: 'full' },
    { path: '**', component: PageNotFoundComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(RouteDefinitions,
        {
            enableTracing: false,
            preloadingStrategy: PreloadAllModules
        })],
    exports: [RouterModule]
})
export class AppRoutingModule { } 