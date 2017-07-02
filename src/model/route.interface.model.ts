export interface Route {

  name: string;
  stops: Stop[];
  schedules: Schedule[];
}

  export interface Stop{
  id: string;
  time_from_previous: string;
}
  export interface Schedule{
  weekly_days: string;
  departures: string;
}

