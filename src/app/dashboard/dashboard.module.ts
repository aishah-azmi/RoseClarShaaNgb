import {NgModule} from '@angular/core';
import {Example,} from './example/example';
import {SharedModule} from '../shared/shared.module';
import {Accordion} from './accordion/accordion';

@NgModule({
  bootstrap : [],
  providers : [],
  declarations: [Example, Accordion],
  exports: [],
  imports: [SharedModule],
  entryComponents:[],
})

export class DashboardModule{

}
