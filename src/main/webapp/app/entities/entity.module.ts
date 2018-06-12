import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { TodoTodoTheBibiLabModule } from './todo-the-bibi-lab/todo-the-bibi-lab.module';
import { TodoPersonTheBibiLabModule } from './person-the-bibi-lab/person-the-bibi-lab.module';
/* jhipster-needle-add-entity-module-import - JHipster will add entity modules imports here */

@NgModule({
    imports: [
        TodoTodoTheBibiLabModule,
        TodoPersonTheBibiLabModule,
        /* jhipster-needle-add-entity-module - JHipster will add entity modules here */
    ],
    declarations: [],
    entryComponents: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class TodoEntityModule {}
