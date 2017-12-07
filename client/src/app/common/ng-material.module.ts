import { NgModule } from '@angular/core';

import { MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule} from '@angular/material/core';  
import { MatInputModule } from '@angular/material';

@NgModule({ 
    imports: [
        MatDatepickerModule,
        MatNativeDateModule,
        MatInputModule],
    exports: [
        MatDatepickerModule,
        MatNativeDateModule,
        MatInputModule]
})
export class NGMaterialModule {
}

