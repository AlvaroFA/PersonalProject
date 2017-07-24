import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {BusService} from '../services/busService';
import {HttpModule} from '@angular/http';
import { KeysPipe} from '../model/test.pipe';


@NgModule({
  declarations: [
    AppComponent,
    KeysPipe
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
