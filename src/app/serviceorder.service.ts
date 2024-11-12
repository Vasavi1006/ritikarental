import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceorderService {
  constructor() { }
  order:any=[];
  getorders(){
    return of(this.order);
  }
addtoorders(neworder:any){
  this.order.push(neworder);
}
}
