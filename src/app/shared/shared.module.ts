import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {NgbAccordionModule, NgbAlertModule, NgbPaginationModule} from '@ng-bootstrap/ng-bootstrap';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';

export const BOOTSTRAP_MODULE = [
  NgbPaginationModule,
  NgbAlertModule,
  NgbAccordionModule
];
@NgModule({
  declarations: [],
  imports: [
    FormsModule,CommonModule,
    BOOTSTRAP_MODULE,
  ],
  exports: [FormsModule,CommonModule,BOOTSTRAP_MODULE],
  providers: [],
  bootstrap: []
})
export class SharedModule { }
