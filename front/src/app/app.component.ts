import { OnInit, OnDestroy, Component } from '@angular/core';
import { Route } from '../model/route.model';
import { Stops } from '../model/stop.model';
import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Observable';
import { BusService } from '../services/busService';
@Component({
  selector: 'app-bus',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  title: String;
  id: String;
  routes: Observable<Route[]>;
  stops_detail: Observable<Stops[]>;
  subscription: Subscription;

  constructor(private service: BusService) {
    this.title = 'Horario autobuses';
    this.id = '5975d4c66e2705ac7e44c4e9';
  }

  ngOnDestroy() {
    this.routes = null;
    this.stops_detail = null;
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  ngOnInit() {
    this.routes = this.service.getRoutes();
  }

  OnSelect(id: String) {
    this.stops_detail = this.service.getDetails(id);
  }


}
