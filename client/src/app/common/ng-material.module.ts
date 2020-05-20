import { NgModule } from '@angular/core';

import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule} from '@angular/material/core';  
import { MatDatepickerModule} from '@angular/material/datepicker';
import {MatSelectModule} from '@angular/material/select';

@NgModule({ 
    imports: [
        MatDatepickerModule,
        MatNativeDateModule,
        MatInputModule,
        MatSelectModule],
    exports: [
        MatDatepickerModule,
        MatNativeDateModule,
        MatInputModule,
        MatSelectModule]
})
export class NGMaterialModule {
}

