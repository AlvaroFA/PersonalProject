import {OnInit, OnDestroy, Component } from '@angular/core';
import { Route } from '../model/route.model';
import {Subscription} from 'rxjs/Subscription';
import {Observable} from 'rxjs/Observable';
import {BusService} from '../services/busService';
@Component({
  selector: 'app-bus',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'Horario autobuses';
  routes: Observable<Route[]>;
  subscription: Subscription;


  constructor(private service: BusService) {
  }

  ngOnDestroy() {
    this.routes = null;
    this.subscription.unsubscribe();
  }

  ngOnInit() {
   this.routes = this.service.getData();
  }


}
