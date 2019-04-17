import {NgModule} from '@angular/core';
import {Example, } from './example/example';
import {SharedModule} from '../shared/shared.module';
import {Accordion} from './accordion/accordion';
import {NgbdTableBasic} from './table/table-basic.page';
import {AlertBasic} from '../alert/alert-basic';
import {AlertClose} from '../alert/alert-closeable';
import {AccordionBasic} from '../accordian/accordion';


@NgModule({
  bootstrap : [],
  providers : [],
  declarations: [Example, Accordion, NgbdTableBasic, AlertBasic, AlertClose, AccordionBasic],
  exports: [],
  imports: [SharedModule],
  entryComponents: [],
})

export class DashboardModule {
}
