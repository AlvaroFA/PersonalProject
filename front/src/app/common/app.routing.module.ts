import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from '../errorComponent/error-component';
import { HomeComponent } from '../home-component/home-component';
import {SearchComponent} from '../search/search.component';
const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'search',
    component: SearchComponent
  },
  {
    path: '**',
    component: ErrorComponent
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes
    )],
  exports: [
    RouterModule
  ]
})
export class AppRouterModule {

}
