import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {BusService} from '../services/busService';
import {HttpModule} from '@angular/http';
import { KeysPipe} from '../model/test.pipe';
import { NavBarComponent } from './nav-bar/nav-bar.component';


@NgModule({
  declarations: [
    AppComponent,
    KeysPipe,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
  ],
  bootstrap: [AppComponent
  ],
  providers: [
    BusService
  ]
})
export class AppModule {
}
