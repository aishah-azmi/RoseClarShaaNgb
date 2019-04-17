import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {NgbAlertModule, NgbModule, NgbPaginationModule} from '@ng-bootstrap/ng-bootstrap';
import {SharedModule} from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    SharedModule,
    NgbModule,
    BrowserModule,
    NgbPaginationModule,
    NgbAlertModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
