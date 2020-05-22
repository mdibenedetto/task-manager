import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import { SettingComponent } from './setting.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: 'settings',
        component: SettingComponent
      }
    ])
  ],
  declarations: [SettingComponent]
})
export class SettingsModule { }
