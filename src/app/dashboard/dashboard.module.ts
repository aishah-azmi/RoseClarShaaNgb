import {NgModule} from '@angular/core';
import {Example, } from './example/example';
import {SharedModule} from '../shared/shared.module';
import {AlertBasic} from '../alert/alert-basic';
import {AlertClose} from '../alert/alert-closeable';
import {AccordionBasic} from '../accordian/accordion';


@NgModule({
  bootstrap : [],
  providers : [],
  declarations: [Example, AlertBasic, AlertClose, AccordionBasic],
  exports: [],
  imports: [SharedModule],
  entryComponents: [],
})

export class DashboardModule {
}
