import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {NgbAlertModule, NgbPaginationModule} from '@ng-bootstrap/ng-bootstrap';

export const BOOTSTRAP_MODULE = [
  NgbPaginationModule,
  NgbAlertModule,];
@NgModule({
  declarations: [
  ],
  imports: [
    BOOTSTRAP_MODULE,
  ],
  exports: [BOOTSTRAP_MODULE],
  providers: [],
  bootstrap: []
})
export class SharedModule { }
