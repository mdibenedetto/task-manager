import { NgModule } from '@angular/core';

import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

const ngmComponents = [
  MatDatepickerModule,
  MatNativeDateModule,
  MatInputModule,
  MatSelectModule
];

@NgModule({
  imports: ngmComponents,
  exports: ngmComponents
})
export class NGMaterialModule {
}

