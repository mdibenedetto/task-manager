import { Route, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { UserComponent } from './user/user/user.component';
import { UserListComponent } from './user/user-list/user-list.component';
import { SettingComponent } from './setting/setting.component';

export const RouteDefinitions: Route[] = [{
    path: '',
    redirectTo: '/tasks',
    pathMatch: 'full'
},
{
    path: 'users',
    component: UserListComponent
},
{
    path: 'settings',
    component: SettingComponent
}
];

@NgModule({
    imports: [RouterModule.forRoot(RouteDefinitions)],
    exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [
    UserComponent,
    UserListComponent,
    SettingComponent
];