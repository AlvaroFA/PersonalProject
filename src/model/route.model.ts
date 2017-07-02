import {Schedule} from './schedule.model';
import {Stops} from './stop.model';

export class Route {

  name: string;
  stops: Stops[];
  schedules: Schedule[];


  constructor(n: string, s: Stops[], sc: Schedule[]) {
    this.name = n;
    this.stops = s;
    this.schedules = sc;
  }
}
