export class Stops {
  name:String;
  to_get_on: boolean;
  to_get_off: boolean;
  region_name: String;

  constructor(n:String, tgon:boolean,tgof:boolean,r:string){
    this.name=n;
    this.to_get_on= tgon;
    this.to_get_off=tgof;
    this.region_name=r;
  }

}


