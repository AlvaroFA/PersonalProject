import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {NgModule} from '@angular/core';
import {BusService} from '../services/busService';
import {HttpModule} from '@angular/http';
import { KeysPipe} from '../model/test.pipe';
import { NavBarComponent } from './common/nav-bar/nav-bar.component';
import { ErrorComponent } from './errorComponent/error-component';
import { HomeComponent } from './home-component/home-component';
import {AppRouterModule} from './common/app.routing.module';
import { SearchComponent } from './search/search.component';
import {AppComponent} from './app.component';


@NgModule({
  declarations: [
    KeysPipe,
    NavBarComponent,
    ErrorComponent,
    HomeComponent,
    SearchComponent,
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    AppRouterModule
  ],
  bootstrap: [AppComponent
  ],
  providers: [
    BusService
  ]
})
export class AppModule {
}
