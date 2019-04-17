import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AppshellComponent} from './appshell/appshell.component';
import {Example} from './dashboard/example/example';

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
      {path: 'dashboard', component: Example}
    ]
  }]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule{}
