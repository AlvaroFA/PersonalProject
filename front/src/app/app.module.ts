import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {BusService} from '../services/busService';
import {HttpModule} from '@angular/http';
import { KeysPipe} from '../model/test.pipe';
import { NavBarComponent } from './common/nav-bar/nav-bar.component';
import { ErrorComponent } from './errorComponent/error-component.component';
import { HomeComponent } from './home-component/home-component.component';


@NgModule({
  declarations: [
    KeysPipe,
    NavBarComponent,
    ErrorComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
  ],
  bootstrap: [
  ],
  providers: [
    BusService
  ]
})
export class AppModule {
}
