import {NgModule} from '@angular/core';
import {Example,} from './example/example';
import {SharedModule} from '../shared/shared.module';
import {Accordion} from './accordion/accordion';
import {NgbdTableBasic} from './table/table-basic.page';

@NgModule({
  bootstrap : [],
  providers : [],
  declarations: [Example, Accordion, NgbdTableBasic,],
  exports: [],
  imports: [SharedModule],
  entryComponents:[],
})

export class DashboardModule {

}
