import { Route, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { WelcomeComponent } from './welcome/welcome.component';


export const RouteDefinitions: Route[] = [
    { path: 'welcome', component: WelcomeComponent },
    { path: '', redirectTo: 'welcome', pathMatch: 'full' },
    { path: 'home', redirectTo: 'welcome', pathMatch: 'full' },    
    { path: '**', component: PageNotFoundComponent } 
];

@NgModule({
    imports: [RouterModule.forRoot(RouteDefinitions)],
    exports: [RouterModule]
})
export class AppRoutingModule { } 