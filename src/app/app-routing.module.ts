import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AppshellComponent} from './appshell/appshell.component';
import {Example} from './dashboard/example/example';
import {AlertBasic} from './alert/alert-basic';
import {AlertClose} from './alert/alert-closeable';
import {AccordionBasic} from './accordian/accordion';
import {NgbdTableBasic} from './dashboard/table/table-basic.page';

const routes: Routes = [
{
  path: '',
    pathMatch : 'full',
    redirectTo : 'shell',
},
  {
    path: 'shell',
    component: AppshellComponent,
    children: [
      {path: '', pathMatch: 'full', redirectTo: 'dashboard'},
      {path: 'dashboard', component: Example},
      {path: 'alert-basic', component: AlertBasic},
      {path: 'alert-close', component: AlertClose},
      {path: 'accordion', component: AccordionBasic},
      {path: 'table-basic', component: NgbdTableBasic},

}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
