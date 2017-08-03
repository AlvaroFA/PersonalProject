import { Component, OnInit, OnDestroy } from '@angular/core';
import { Route } from 'model/route.model';
import { Stops } from 'model/stop.model';
import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Observable';
import { BusService } from '../../services/busService';



@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  title: String;
  subscription: Subscription;
  route: Observable<Route[]>;
  submit= false;
    constructor(private service: BusService) {
    this.title = 'Busqueda';

    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  ngOnInit() {
    this.route = this.service.getRoutes();
  }

  onSubmit(){
    this.submit= true;
  }

}
