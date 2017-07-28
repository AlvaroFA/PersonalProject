export class Schedule {
  labor_days: String[];
  saturday_labor_days: String[];
  holidays_sunday_days: String[];

  constructor(l: String[], s: String[], h: String[]) {
    this.labor_days = l;
    this.saturday_labor_days = s;
    this.holidays_sunday_days = h;
  }
}
