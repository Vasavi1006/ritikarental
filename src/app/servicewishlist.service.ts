import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicewishlistService {
  constructor() { }
  wishlist:any=[];
  getvehicles(){
return of(this.wishlist);
  }
  addtowishlist(newvechile:any){
    this.wishlist.push(newvechile);
  }
getlengthofwishlist(){
  return this.wishlist.length;
}

}
