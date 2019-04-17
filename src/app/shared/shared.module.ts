import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {NgbAccordionModule, NgbAlertModule, NgbPaginationModule} from '@ng-bootstrap/ng-bootstrap';
import {Accordion} from '../dashboard/accordion/accordion';

export const BOOTSTRAP_MODULE = [
  NgbPaginationModule,
  NgbAlertModule,
  NgbAccordionModule
];
@NgModule({
  declarations: [],
  imports: [
    BOOTSTRAP_MODULE,
  ],
  exports: [BOOTSTRAP_MODULE],
  providers: [],
  bootstrap: []
})
export class SharedModule { }
