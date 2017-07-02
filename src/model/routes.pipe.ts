import {Pipe, PipeTransform} from '@angular/core';
import {Route} from './route.model';


@Pipe({
  name: 'routesPipe'
})
export class RoutesPipe implements PipeTransform {
  transform(value, args: Route[]): string[] {
    const keys = [];
    for (const key in value) {
      keys.push({key: key, value: value[key]});
    }
    return keys;
  }
}


