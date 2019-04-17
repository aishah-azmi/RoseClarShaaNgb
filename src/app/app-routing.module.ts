import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AppshellComponent} from './appshell/appshell.component';
import {Example} from './dashboard/example/example';
import {NgbdTableBasic} from './dashboard/table/table-basic.page';

const routes : Routes = [
{
  path: '',
    pathMatch : 'full',
    redirectTo : 'shell',
},
  {
    path:'shell',
    component: AppshellComponent,
    children:[
      {path: '', pathMatch:'full', redirectTo: 'dashboard'},
      {path: 'dashboard', component: Example},
      {path: 'table-basic', component: NgbdTableBasic},
    ]
  }]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule{}
