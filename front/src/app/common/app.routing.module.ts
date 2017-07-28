import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from '../errorComponent/error-component';
import { HomeComponent } from '../home-component/home-component';
const appRoutes: Routes = [
  RouterModule.forRoot([
    {
      path: '',
      redirectTo: '/'
    },
    {
      path: '/',
      component: HomeComponent
    },
    {
      path: '/pene ',
      redirectTo: 'https://twitter.com/',
      component: ErrorComponent
    }
    ])
]
@NgModule({
  imports: [
    RouterModule.forRoot([appRoutes
    ])],
  exports: [
    RouterModule
  ]
})
export class Router { }
