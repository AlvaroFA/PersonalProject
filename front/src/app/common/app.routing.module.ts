import { NgModule } from '@angular/core';
import { RouterModule , Routes} from '@angular/router';

import {ErrorComponent} from '../errorComponent/error-component.component';
import {HomeComponent} from '../home-component/home-component.component';
const appRoutes: Routes= [
    RouterModule.forRoot([
      { path: '',
       redirectTo: '/home' 
       },
       { path: '/home',
       component:HomeComponent
       },
      {path: 'search', 
      component: SearchComponent},
      {path:'now', 
      component: NowComponent},
      {path: '** ', 
      component: ErrorComponent}

]


@NgModule({
  imports: [
    RouterModule.forRoot([appRoutes
    ])
  ],
  exports:[
    RouterModule
  ]
})
export class Router { }
