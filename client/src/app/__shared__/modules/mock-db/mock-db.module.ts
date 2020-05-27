import { NgModule } from '@angular/core';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { MockInMemoryDbService } from "./mock-db.service";

@NgModule({
    imports: [
        InMemoryWebApiModule.forRoot(MockInMemoryDbService, {
            apiBase: 'api/',
            delay: 0
        })],
    exports: [],
    declarations: [],
    providers: [],
})
export class MockDBModule { }

