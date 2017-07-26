import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Rx';
import { Route } from '../model/route.model';
import { Stops } from '../model/stop.model';

@Injectable()
export class BusService {

  constructor(private http: Http) {
  }

  // first use with model
  // doesnt works, maybe the problem its return data

  getRoutes(): Observable<Route[]> {
    return this.http.get('http://localhost:3000/lines/')
      .map((res: Response) => {
        const routesmap: Route[] = <Route[]>res.json();
        return routesmap;
      })
  }

  getDetails(id: String): Observable<Stops[]> {
    return this.http.get('http://localhost:3000/lines/' + id)
      .map((res: Response) => {
        const stops: Stops[]= <Stops[]>res.json().stops;
        return stops
        ;
      });
  }

  // test only
  getData() {
    return this.http.get('http://localhost:3000/routes/')
      .map(res => res.json())
  }
}
